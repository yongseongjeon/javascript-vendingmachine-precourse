import {
  createTitle,
  createButtonProductPurchaseMenu,
  createButtonProductAddMenu,
  createButtonManageMenu,
  createPartProductPurchase,
  createButtonAddProduct,
  createPartProductStatus,
  createPartCharge,
  createPartHasCoin,
} from "./views.js";

class VendingMachine {
  constructor() {
    this.init();
  }

  init() {
    // this.createTabProductPurchaseMenu();
    this.createTabManageMenu();
  }

  createTabProductPurchaseMenu() {
    createTitle();
    createButtonProductAddMenu();
    createButtonProductPurchaseMenu();
    createButtonManageMenu();
    createPartProductPurchase();
    createButtonAddProduct();
    createPartProductStatus();
  }

  createTabManageMenu() {
    createTitle();
    createButtonProductAddMenu();
    createButtonProductPurchaseMenu();
    createButtonManageMenu();
    createPartCharge();
    createPartHasCoin();
  }
}

const vendingMachine = new VendingMachine();
