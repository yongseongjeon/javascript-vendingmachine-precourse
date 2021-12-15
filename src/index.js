import { createHeader } from "../src/containers/base/header.js";
import { createTabAddProduct } from "./containers/tab/tabAddProduct.js";
import { createTabManage } from "../src/containers/tab/tabManage.js";
import { createTabPurchase } from "./containers/tab/tabPurchase.js";
import { showTabAdd, showTabManage, showTabPurchase } from "./handler.js";
import { Product } from "./Product.js";
import {
  addTableBody,
  getObjLocalStorage,
  setObjLocalStorage,
} from "./utils.js";

class VendingMachine {
  constructor() {
    // TODO: 가독성 좋게
    if (getObjLocalStorage("products")) {
      this.products = [...getObjLocalStorage("products")];
    } else {
      this.products = [];
    }
    this.money = 0;
    this.init();
  }

  init() {
    this.drawView();
    showTabAdd();
    this.handleTabMovement();

    this.updateTable();

    this.handleAddProduct();
  }

  updateTable() {
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
