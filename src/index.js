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
import { canPurchase } from "./validation.js";

class VendingMachine {
  constructor() {
    // TODO: 가독성 좋게
    if (getObjLocalStorage("products")) {
      this.products = [...getObjLocalStorage("products")];
    } else {
      this.products = INIT.PRODUCTS;
    }
    this.changes = getObjLocalStorage("changes") || INIT.CHANGES;
    this.coins = getObjLocalStorage("coins") || INIT.COINS;
    this.money = getObjLocalStorage("money") || INIT.MONEY;
    
    this.init();
  }

  

  init() {
    this.drawView();
    // showTabAdd();

    // 상품 현황 테이블 업데이트
    this.updateProductStatusTable();

    // 보유 금액 업데이트
    this.updateChanges();

    // 코인 업데이트
    // TODO: 개 분리
    const coinUnit = [500, 100, 50, 10];
    coinUnit.forEach((unit) => {
      getCoinQuantityElByUnit(unit).innerText = `${this.coins[unit]}개`;
    });

    getInputMoneyAmountEl().innerText = this.money;

    this.handleInputMoney();
    this.handleChargeMoney();
    this.handleTabMovement();
    this.handleAddProduct();
    this.handlePurchaseProduct();
  }

  updateChanges() {
    getChargeAmountEl().innerText = this.changes;
  }

  updateProductStatusTable() {
    // 클래스 변수 갱신
    this.products = this.products.filter((prod) => prod.quantity > 0);
    
    // 상품 현황(추가) 테이블 DOM 갱신
    this.products.forEach((prod, idx) => {
      addTableBody("product-manage-item", [
        prod.name,
        prod.price,
        prod.quantity,
      ]);
      // TODO: id 다른 값으로 수정
      addTableBody("product-purchase-item", [
        prod.name,
        prod.price,
        prod.quantity,
        button({ className: "purchase-button", text: "구매하기", id: idx }),
      ]);
    });
  }

  handlePurchaseProduct() {
    // TODO: 버튼 눌러서 구매하기 구현
    Array.from(getPurchaseBtnEl()).forEach((el) => {
      el.addEventListener("click", (e) => {
        const curIdx = e.target.id;
        const curProd = this.products[curIdx];
        const money = this.money - curProd.price;

        if (!canPurchase(this.money, curProd)) {
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
      const money = this.money + Number(getInputMoneyEl().value);
      this.money = money;
      getInputMoneyEl().value = "";
      // TODO: 하위 내용 updateMoeny 함수랑 합칠 수 있을듯.
      getInputMoneyAmountEl().innerText = money;
      setObjLocalStorage("inputMoney", money);
    });
  };

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
    this.money = money;
  }

  updateMoney(money) {
    getChargeAmountEl().innerText = money;
    setObjLocalStorage("money", money);
    this.changes = money;
  }

  chargeMoney(curMoney) {
    const money = curMoney + Number(getChargeInputEl().value);
    this.updateCoins(+getChargeInputEl().value);
    getChargeInputEl().value = "";
    this.updateMoney(money);
  }

  handleChargeMoney() {
    getChargeBtnEl().addEventListener("click", () =>
      this.chargeMoney(this.changes)
    );
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

  // View
  handleTabMovement = () => {
    getAddTabBtnEl().addEventListener("click", showTabAdd);
    getManageTabBtnEl().addEventListener("click", showTabManage);
    getPurchaseTabBtnEl().addEventListener("click", showTabPurchase);
  };

  drawView() {
    createHeader();
    createTabAddProduct();
    createTabManage();
    createTabPurchase();
  }
}

const vendingMachine = new VendingMachine();
