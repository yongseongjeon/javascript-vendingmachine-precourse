import { createHeader } from "../src/containers/base/header.js";
import { createTabAddProduct } from "./containers/tab/tabAddProduct.js";
import { createTabManage } from "../src/containers/tab/tabManage.js";
import { createTabPurchase } from "./containers/tab/tabPurchase.js";
import { showTabAdd, showTabManage, showTabPurchase } from "./handler.js";

class VendingMachine {
  constructor() {
    this.init();
  }

  init() {
    this.drawView();
    this.handleTabMovement();
  }

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
