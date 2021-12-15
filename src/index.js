import { createHeader } from "../src/containers/base/header.js";
import { createTabAddProduct } from "./containers/tab/tabAddProduct.js";
import { createTabManage } from "../src/containers/tab/tabManage.js";
import { createTabPurchase } from "./containers/tab/tabPurchase.js";
import { table } from "./components/table.js";

class VendingMachine {
  constructor() {
    this.init();
  }

  init() {
    this.drawView();
  }

  drawView() {
    createHeader();
    // createTabAddProduct();
    createTabManage();
    // createTabPurchase();
  }
}

const vendingMachine = new VendingMachine();
