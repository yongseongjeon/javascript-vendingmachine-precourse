import {
  createTitle,
  createTabButtonAddProduct,
  createTabButtonManage,
  createTabButtonProductPurchase,
  createPartAddProduct,
  createButtonAddProduct,
  createPartProductStatus,
  createPartCharge,
  createPartHasCoin,
  createPartInputMoney,
} from "./views.js";

class VendingMachine {
  constructor() {
    this.init();
  }

  init() {
    // this.createTabAddProduct();
    // this.createTabManage();
    this.createTabProductPurchase();
  }

  createTabProductPurchase() {
    this.createHeader();
    createPartInputMoney();
  }

  createTabAddProduct() {
    this.createHeader();
    createPartAddProduct();
    createButtonAddProduct();
    createPartProductStatus();
  }

  createTabManage() {
    this.createHeader();
    createPartCharge();
    createPartHasCoin();
  }

  createHeader() {
    createTitle();
    createTabButtonAddProduct();
    createTabButtonManage();
    createTabButtonProductPurchase();
  }
}

const vendingMachine = new VendingMachine();
