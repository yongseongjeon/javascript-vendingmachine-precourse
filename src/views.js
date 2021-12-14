import { STR, TABLE, ID } from "./constants.js";
import { createElement, createInput, createTable } from "./utils.js";

export const createTitle = () => {
  createElement(ID.ROOT, "h2", STR.TITLE);
};

export const createTabButtonAddProduct = () => {
  const tagID = "product-add-menu";
  createElement(ID.ROOT, "button", STR.TAB_ADD_PRODUCT, tagID);
};

export const createTabButtonManage = () => {
  const tagID = "vending-machine-manage-menu";
  createElement(ID.ROOT, "button", STR.TAB_MANAGE, tagID);
};

export const createTabButtonProductPurchase = () => {
  const tagID = "product-purchase-menu";
  createElement(ID.ROOT, "button", STR.TAB_PURCHASE_PRODUCT, tagID);
};

export const createPartAddProduct = () => {
  createElement(ID.ROOT, "h3", STR.SUBTITLE_ADD_PRODUCT);

  // createInput(parentID, type, placeholder, tagID)
  createInput(ID.ROOT, "text", "상품명", "product-name-input");
  createInput(ID.ROOT, "number", "가격", "product-price-input");
  createInput(ID.ROOT, "number", "수량", "product-quantity-input");
};

export const createButtonAddProduct = () => {
  createElement(ID.ROOT, "button", "추가하기", "product-add-button");
};

export const createPartProductStatus = () => {
  createElement(ID.ROOT, "h3", STR.SUBTITLE_PRODUCT_STATUS);
  createTable(TABLE.PRODUCT_ID, TABLE.PRODUCT_HEAD, TABLE.PRODUCT_BODY);
};

export const createPartCharge = () => {
  createElement(ID.ROOT, "h3", STR.SUBTITLE_CHARGE);

  const placeholder = "자판기가 보유할 금액";
  createInput(ID.ROOT, "number", placeholder, "vending-machine-charge-input");
  createElement(ID.ROOT, "button", "충전하기", "vending-machine-charge-button");
  createElement(ID.ROOT, "div", "보유 금액:");
  createElement(ID.ROOT, "span", null, "vending-machine-charge-amount");
};

export const createPartHasCoin = () => {
  createElement(ID.ROOT, "h3", STR.SUBTITLE_HAS_COIN);
  createTable(TABLE.COIN_ID, TABLE.COIN_HEAD, TABLE.COIN_BODY, ID.COIN_BODY);
};

export const createPartInputMoney = () => {
  createElement(ID.ROOT, "h3", STR.SUBTITLE_INPUT_MONEY);
  const placeholder = "투입할 금액";
  createInput(ID.ROOT, "number", placeholder, "charge-input");
  createElement(ID.ROOT, "button", "투입하기", "charge-button");
  createElement(ID.ROOT, "br");
  createElement(ID.ROOT, "span", "투입한 금액: ");
  createElement(ID.ROOT, "span", null, "charge-amount");
  createElement(ID.ROOT, "h3", STR.SUBTITLE_CAN_PURCHASE_STATE);
  // TODO: 테이블의 td가 head만큼 생성되어야 함.
  createTable(TABLE.PURCHASE_ID, TABLE.PURCHASE_HEAD, TABLE.PURCHASE_BODY);
  createElement(ID.ROOT, "div", null, "A");
  document.getElementById("A").innerHTML = changes("잔돈", "반환하기");
};
