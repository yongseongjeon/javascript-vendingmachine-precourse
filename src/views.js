import { STR, TABLE, ID } from "./constants.js";
import { createElement, createInput, createTable } from "./utils.js";

export const createTitle = () => {
  createElement(ID.ROOT, "h2", STR.TITLE);
};

export const createButtonProductAddMenu = () => {
  const tagID = "product-add-menu";
  createElement(ID.ROOT, "button", STR.TAB_ADD_PRODUCT, tagID);
};

export const createButtonManageMenu = () => {
  const tagID = "vending-machine-manage-menu";
  createElement(ID.ROOT, "button", STR.TAB_MANAGE, tagID);
};

export const createButtonProductPurchaseMenu = () => {
  const tagID = "product-purchase-menu";
  createElement(ID.ROOT, "button", STR.TAB_PURCHASE_PRODUCT, tagID);
};

export const createPartProductPurchase = () => {
  createElement(ID.ROOT, "h3", STR.SUBTITLE_PURCHASE_PRODUCT);

  // createInput(parentID, placeholder, tagID)
  createInput(ID.ROOT, "상품명", "product-name-input");
  createInput(ID.ROOT, "가격", "product-price-input");
  createInput(ID.ROOT, "수량", "product-quantity-input");
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
  createInput(ID.ROOT, placeholder, "vending-machine-charge-input");
  createElement(ID.ROOT, "button", "충전하기", "vending-machine-charge-button");
  createElement(ID.ROOT, "div", "보유 금액:", "vending-machine-charge-amount");
};

export const createPartHasCoin = () => {
  createElement(ID.ROOT, "h3", STR.SUBTITLE_HAS_COIN);

  createTable(TABLE.COIN_ID, TABLE.COIN_HEAD, TABLE.COIN_BODY, ID.COIN_BODY);
};
