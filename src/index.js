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
  getMoneyEl,
  getMoneyBtnEl,
  getMoneyAmountEl,
  getPurchaseBtnEl,
} from "./elements.js";
import { input } from "./components/input.js";
import { button } from "./components/button.js";
import { canPurchase } from "./validation.js";

class VendingMachine {
  constructor() {
    this.products = getObjLocalStorage("products") || INIT.PRODUCTS;
    this.changes = getObjLocalStorage("changes") || INIT.CHANGES;
    this.coins = getObjLocalStorage("coins") || INIT.COINS;
    this.money = getObjLocalStorage("money") || INIT.MONEY;
    this.productNum = this.products.length;

    this.init();
  }

  init() {
    // View
    this.drawView();
    showTabAdd();

    // Render
    this.renderProductAddTable();
    this.renderProductPurchaseTable();
    this.renderChanges();
    this.renderCoins();
    this.renderMoney();

    // Event
    this.handleTabMovement();
    this.handleAddProduct();
    this.handlePurchaseProduct();
    this.handleChanges();
    this.handleMoney();
  }

  // View
  drawView() {
    createHeader();
    createTabAddProduct();
    createTabManage();
    createTabPurchase();
  }

  // Render
  renderProductAddTable() {
    document.querySelector("#product-manage-item tbody").innerHTML = "";
    this.products.forEach((prod) => {
      addTableBody("product-manage-item", [
        prod.name,
        prod.price,
        prod.quantity,
      ]);
    });
  }
  renderProductPurchaseTable() {
    document.querySelector("#product-purchase-item tbody").innerHTML = "";
    this.products.forEach((prod) => {
      addTableBody("product-purchase-item", [
        prod.name,
        prod.price,
        prod.quantity,
        button({ className: "purchase-button", text: "구매하기", id: prod.id }),
      ]);
    });
  }
  renderChanges() {
    getChargeAmountEl().innerText = this.changes;
    setObjLocalStorage("changes", this.changes);
  }
  renderCoins() {
    const coinUnit = [500, 100, 50, 10];
    coinUnit.forEach((unit) => {
      getCoinQuantityElByUnit(unit).innerText = `${this.coins[unit]}개`;
    });
  }
  renderMoney() {
    getMoneyAmountEl().innerText = this.money;
    setObjLocalStorage("money", this.money);
  }

  // Event
  handleAddProduct() {
    getAddBtnEl().addEventListener("click", () => {
      this.addProduct(
        getNameEl().value,
        getPriceEl().value,
        getQuantityEl().value,
        this.products.length++
      );
      clearAddInput();
    });
  }
  addProduct(name, price, quantity, id) {
    // 클래스 변수 갱신
    this.products = [...this.products, new Product(name, price, quantity, id)];
    // TODO: this.products에 null이 껴들어가는 버그가 존재...
    // 우선 필터링으로 걸러냄
    this.products = this.products.filter((x) => x !== undefined);
    // DOM 갱신
    this.renderProductAddTable();
    this.renderProductPurchaseTable();
    // 로컬스토리지 갱신
    setObjLocalStorage("products", this.products);
    // eventListener 추가
    this.handlePurchaseProduct();
  }

  handlePurchaseProduct() {
    // TODO: 버튼 눌러서 구매하기 구현
    Array.from(getPurchaseBtnEl()).forEach((el) => {
      el.addEventListener("click", (e) => {
        const idx = e.target.id;
        this.purchaseProduct(idx);
      });
    });
  }
  purchaseProduct(idx) {
    const curProd = this.products[idx];

    if (!canPurchase(this.money, curProd)) {
      alert("구매할 수 없습니다.");
      return;
    }

    this.money -= curProd.price;
    // update 투입 금액
    this.renderMoney();

    // 클래스 변수 갱신
    this.products[idx].quantity -= 1;
    // DOM 갱신
    this.renderProductAddTable();
    this.renderProductPurchaseTable();
    // 로컬스토리지 갱신
    setObjLocalStorage("products", this.products);
    // eventListener 추가
    this.handlePurchaseProduct();
  }

  handleChanges() {
    getChargeBtnEl().addEventListener("click", () => {
      const chargeChanges = Number(getChargeInputEl().value);
      this.chargeChanges(chargeChanges);
      this.updateCoins(chargeChanges);
    });
  }
  chargeChanges(chargeChanges) {
    this.changes += chargeChanges;
    getChargeInputEl().value = "";
    this.renderChanges();
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

  handleMoney = () => {
    getMoneyBtnEl().addEventListener("click", () => {
      this.chargeMoney();
    });
  };
  chargeMoney() {
    const money = this.money + Number(getMoneyEl().value);
    getMoneyEl().value = "";
    this.money = money;
    this.renderMoney();
  }

  // View
  handleTabMovement = () => {
    getAddTabBtnEl().addEventListener("click", showTabAdd);
    getManageTabBtnEl().addEventListener("click", showTabManage);
    getPurchaseTabBtnEl().addEventListener("click", showTabPurchase);
  };
}

const vendingMachine = new VendingMachine();
