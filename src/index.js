import {
  drawTitle,
  drawButtonProductPurchaseMenu,
  drawButtonProductAddMenu,
  drawButtonManageMenu,
  drawPartProductPurchase,
  drawButtonAddProduct,
  drawPartProductStatus,
  drawPartCharge,
  drawPartHasCoin,
} from "./views.js";

class VendingMachine {
  constructor() {
    this.init();
  }

  init() {
    this.drawTabProductPurchaseMenu();
    // this.drawTabManageMenu();
  }

  drawTabProductPurchaseMenu() {
    drawTitle();
    drawButtonProductAddMenu();
    drawButtonProductPurchaseMenu();
    drawButtonManageMenu();
    drawPartProductPurchase();
    drawButtonAddProduct();
    drawPartProductStatus();
  }

  drawTabManageMenu() {
    drawTitle();
    drawButtonProductAddMenu();
    drawButtonProductPurchaseMenu();
    drawButtonManageMenu();
    drawPartCharge();
    drawPartHasCoin();
  }
}

const vendingMachine = new VendingMachine();
