import { createHeader } from "../src/containers/base/header.js";
import { createTabAddProduct } from "./containers/tab/tabAddProduct.js";
import { createTabManage } from "../src/containers/tab/tabManage.js";
import { createTabPurchase } from "./containers/tab/tabPurchase.js";
import {
  clearAddInput,
  showTabAdd,
  showTabManage,
  showTabPurchase,
} from "./handler.js";
import { Product } from "./Product.js";
import {
  addTableBody,
  getObjLocalStorage,
  getRandomNumber,
  setObjLocalStorage,
} from "./utils.js";
import { INIT } from "./constants.js";
import {
  getChargeInputEl,
  getChargeAmountEl,
  getCoinQuantityElByUnit,
  getChargeBtnEl,
  getAddBtnEl,
  getNameEl,
  getPriceEl,
  getQuantityEl,
  getAddTabBtnEl,
  getManageTabBtnEl,
  getPurchaseTabBtnEl,
  getInputMoneyEl,
  getInputMoneyBtnEl,
  getInputMoneyAmountEl,
  getPurchaseBtnEl,
} from "./elements.js";
import { input } from "./components/input.js";
import { button } from "./components/button.js";

class VendingMachine {
  constructor() {
    // TODO: 가독성 좋게
    if (getObjLocalStorage("products")) {
      this.products = [...getObjLocalStorage("products")];
    } else {
      this.products = [];
    }
    this.money = getObjLocalStorage("money");
    this.coins = getObjLocalStorage("coins") || INIT.COINS;
    this.inputMoney = getObjLocalStorage("inputMoney");

    this.init();
  }

  init() {
    this.drawView();
    showTabAdd();

    this.updateTable();

    // 보유 금액 업데이트
    getChargeAmountEl().innerText = this.money;

    // 코인 업데이트
    // TODO: 개 분리
    const coinUnit = [500, 100, 50, 10];
    coinUnit.forEach((unit) => {
      getCoinQuantityElByUnit(unit).innerText = `${this.coins[unit]}개`;
    });

    getInputMoneyAmountEl().innerText = this.inputMoney;

    this.handleInputMoney();
    this.handleChargeMoney();
    this.handleTabMovement();
    this.handleAddProduct();
    this.handlePurchaseProduct();
  }

  handlePurchaseProduct() {
    // TODO: 버튼 눌러서 구매하기 구현
    Array.from(getPurchaseBtnEl()).forEach((el) => {
      el.addEventListener("click", (e) => {
        const curIdx = e.target.id;
        const curProd = this.products[curIdx];
        const money = this.inputMoney - curProd.price;

        if (!this.canPurchase(curProd)) {
          alert("구매할 수 없습니다.");
          return;
        }

        this.updateInputMoney(money);
        curProd.quantity -= 1;
        document.getElementById(
          curIdx
        ).parentNode.previousSibling.innerText -= 1;
      });
    });
  }

  handleInputMoney = () => {
    getInputMoneyBtnEl().addEventListener("click", () => {
      const money = this.inputMoney + Number(getInputMoneyEl().value);
      this.inputMoney = money;
      getInputMoneyEl().value = "";
      // TODO: 하위 내용 updateMoeny 함수랑 합칠 수 있을듯.
      getInputMoneyAmountEl().innerText = money;
      setObjLocalStorage("inputMoney", money);
    });
  };

  // 모듈로 분리해야할까? VendingMachine이 들고있는게 맞나?
  canPurchase(prod) {
    const isEnoughMoney = this.inputMoney >= prod.price;
    const isEnoughQuantity = prod.quantity;
    return isEnoughMoney && isEnoughQuantity;
  }

  updateCoins(num) {
    const coinUnit = [500, 100, 50];
    let money = num;
    // TODO: 개 분리
    // TODO: 구조 수정, 중복되는 코드 많음.
    coinUnit.forEach((unit) => {
      const quotient = Math.floor(money / unit);
      const randomNum = getRandomNumber(quotient);
      const coinQuantityEl = getCoinQuantityElByUnit(unit);
      const result = this.coins[unit] + randomNum;
      coinQuantityEl.innerText = `${result}개`;
      this.coins[unit] = result;
      money -= randomNum * unit;
    });
    if (money) {
      const coinQuantityEl = getCoinQuantityElByUnit(10);
      const result = this.coins[10] + Math.floor(money / 10);
      coinQuantityEl.innerText = `${result}개`;
      this.coins[10] = result;
    }
    setObjLocalStorage("coins", this.coins);
  }

  updateInputMoney(money) {
    getInputMoneyAmountEl().innerText = money;
    setObjLocalStorage("inputMoney", money);
    this.inputMoney = money;
  }

  updateMoney(money) {
    getChargeAmountEl().innerText = money;
    setObjLocalStorage("money", money);
    this.money = money;
  }

  chargeMoney(curMoney) {
    const money = curMoney + Number(getChargeInputEl().value);
    this.updateCoins(+getChargeInputEl().value);
    getChargeInputEl().value = "";
    this.updateMoney(money);
  }

  handleChargeMoney() {
    getChargeBtnEl().addEventListener("click", () =>
      this.chargeMoney(this.money)
    );
  }

  updateTable() {
    // update table of add tab
    this.products.forEach((prod) => {
      addTableBody("product-manage-item", [
        prod.name,
        prod.price,
        prod.quantity,
      ]);
    });

    // update table of purchase table
    this.products.forEach((prod, idx) => {
      addTableBody("product-purchase-item", [
        prod.name,
        prod.price,
        prod.quantity,
        button({ className: "purchase-button", text: "구매하기", id: idx }),
      ]);
    });

    this.products = this.products.filter((prod) => prod.quantity > 0);
  }

  addProduct(name, price, quantity) {
    this.products = [...this.products, new Product(name, price, quantity)];
    setObjLocalStorage("products", [...this.products]);
    addTableBody("product-manage-item", [name, price, quantity]);
    addTableBody("product-purchase-item", [
      name,
      price,
      quantity,
      button({ className: "purchase-button", text: "구매하기" }),
    ]);
  }

  handleAddProduct() {
    getAddBtnEl().addEventListener("click", () => {
      const prod = [
        getNameEl().value,
        getPriceEl().value,
        getQuantityEl().value,
      ];
      this.addProduct(...prod);
      clearAddInput();
    });
  }

  handleTabMovement = () => {
    getAddTabBtnEl().addEventListener("click", showTabAdd);
    getManageTabBtnEl().addEventListener("click", showTabManage);
    getPurchaseTabBtnEl().addEventListener("click", showTabPurchase);
  };

  // View
  drawView() {
    createHeader();
    createTabAddProduct();
    createTabManage();
    createTabPurchase();
  }
}

const vendingMachine = new VendingMachine();
