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
} from "./elements.js";

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

    this.init();
  }

  init() {
    this.drawView();
    showTabAdd();

    this.updateTable();

    // 보유 금액 업데이트
    getChargeAmountEl().innerText = this.money;

    // 코인 업데이트
    const coinUnit = [500, 100, 50, 10];
    coinUnit.forEach((unit) => {
      getCoinQuantityElByUnit(unit).innerText = this.coins[unit];
    });

    this.handleChargeMoney();
    this.handleTabMovement();
    this.handleAddProduct();
  }

  updateCoins(num) {
    const coinUnit = [500, 100, 50];
    let money = num;
    coinUnit.forEach((unit) => {
      const quotient = Math.floor(money / unit);
      const randomNum = getRandomNumber(quotient);
      const coinQuaintityEl = getCoinQuantityElByUnit(unit);
      const result = this.coins[unit] + randomNum;
      coinQuaintityEl.innerText = result;
      this.coins[unit] = result;
      money -= randomNum * unit;
    });
    if (money) {
      const coinQuaintityEl = getCoinQuantityElByUnit(10);
      const result = this.coins[10] + Math.floor(money / 10);
      coinQuaintityEl.innerText = result;
      this.coins[10] = result;
    }
    setObjLocalStorage("coins", this.coins);
  }

  updateMoney(money) {
    getChargeAmountEl().innerText = money;
    setObjLocalStorage("money", money);
    this.money = money;
  }

  chargeMoney(curMoney) {
    let money = curMoney + Number(getChargeInputEl().value);
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
  }

  addProduct(name, price, quantity) {
    this.products = [...this.products, new Product(name, price, quantity)];
    setObjLocalStorage("products", [...this.products]);
    addTableBody("product-manage-item", [name, price, quantity]);
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
