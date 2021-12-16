import { createHeader } from "../src/containers/base/header.js";
import { createTabAddProduct } from "./containers/tab/tabAddProduct.js";
import { createTabManage } from "../src/containers/tab/tabManage.js";
import { createTabPurchase } from "./containers/tab/tabPurchase.js";
import { showTabAdd, showTabManage, showTabPurchase } from "./handler.js";
import { Product } from "./Product.js";
import {
  addTableBody,
  getObjLocalStorage,
  getRandomNumber,
  setObjLocalStorage,
} from "./utils.js";
import { INIT } from "./constants.js";

class VendingMachine {
  constructor() {
    // TODO: 가독성 좋게
    if (getObjLocalStorage("products")) {
      this.products = [...getObjLocalStorage("products")];
    } else {
      this.products = [];
    }
    this.money = getObjLocalStorage("money");
    this.coins = INIT.COINS;
    this.init();
  }

  init() {
    this.drawView();
    showTabAdd();

    this.updateTable();

    const chargeAmoutID = "vending-machine-charge-amount";
    document.getElementById(chargeAmoutID).innerText = this.money;

    this.handleChargeMoney();
    this.handleTabMovement();
    this.handleAddProduct();
  }

  updateCoins(num, coinUnit) {
    const coinQuaintity = (unit) => `vending-machine-coin-${unit}-quantity`;
    let money = num;
    coinUnit.forEach((unit) => {
      const max = Math.floor(money / unit);
      const randomNum = getRandomNumber(max);
      const coinNumEl = document.getElementById(coinQuaintity(unit));
      coinNumEl.innerText = coinNumEl.value || 0 + randomNum;
      money -= randomNum * unit;
    });
    if (money) {
      console.log(money);
      const quantityEl = document.getElementById(coinQuaintity(10));
      quantityEl.innerText = Math.floor(money / 10);
    }
  }

  updateMoney(money) {
    document.getElementById("vending-machine-charge-amount").innerText = money;
    setObjLocalStorage("money", money);
    this.money = money;
  }

  chargeMoney(curMoney) {
    const chargeInputID = "vending-machine-charge-input";
    const chargeInputEl = document.getElementById(chargeInputID);
    let money = curMoney + Number(chargeInputEl.value);
    this.updateCoins(+chargeInputEl.value, [500, 100, 50]);
    chargeInputEl.value = "";
    this.updateMoney(money);
  }

  handleChargeMoney() {
    const btnCharge = document.getElementById("vending-machine-charge-button");
    btnCharge.addEventListener("click", () => this.chargeMoney(this.money));
  }

  updateTable() {
    // update table of add product tab
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
    const tmpEl = document.getElementById("product-add-button");
    tmpEl.addEventListener("click", () => {
      const nameEl = document.getElementById("product-name-input");
      const priceEl = document.getElementById("product-price-input");
      const quantityEl = document.getElementById("product-quantity-input");
      this.addProduct(nameEl.value, priceEl.value, quantityEl.value);
      // TODO: 인풋창 초기화 분리?
      nameEl.value = "";
      priceEl.value = "";
      quantityEl.value = "";
    });
  }

  // View
  drawView() {
    createHeader();
    createTabAddProduct();
    createTabManage();
    createTabPurchase();
  }

  handleTabMovement = () => {
    const btnAddEl = document.getElementById("product-add-menu");
    const btnManageEl = document.getElementById("vending-machine-manage-menu");
    const btnPurchaseEl = document.getElementById("product-purchase-menu");

    btnAddEl.addEventListener("click", showTabAdd);
    btnManageEl.addEventListener("click", showTabManage);
    btnPurchaseEl.addEventListener("click", showTabPurchase);
  };
}

const vendingMachine = new VendingMachine();
