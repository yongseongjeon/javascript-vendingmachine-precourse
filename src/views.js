import { TABLE, TAG } from "./constants.js";
import { createElement, createInput, createTable } from "./utils.js";

export const drawTitle = () => {
  const title = "🥤자판기🥤";
  createElement(TAG.ROOT_ID, "h2", title);
};

export const drawButtonProductAddMenu = () => {
  const tagID = "product-add-menu";
  createElement(TAG.ROOT_ID, "button", "상품 관리", tagID);
};

export const drawButtonManageMenu = () => {
  const tagID = "vending-machine-manage-menu";
  createElement(TAG.ROOT_ID, "button", "잔돈 충전", tagID);
};

export const drawButtonProductPurchaseMenu = () => {
  const tagID = "product-purchase-menu";
  createElement(TAG.ROOT_ID, "button", "상품 구매", tagID);
};

export const drawPartProductPurchase = () => {
  createElement(TAG.ROOT_ID, "h3", "상품 추가하기");

  // createInput(parentID, placeholder, tagID)
  createInput(TAG.ROOT_ID, "상품명", "product-name-input");
  createInput(TAG.ROOT_ID, "가격", "product-price-input");
  createInput(TAG.ROOT_ID, "수량", "product-quantity-input");
};

export const drawButtonAddProduct = () => {
  createElement(TAG.ROOT_ID, "button", "추가하기", "product-add-button");
};

export const drawPartProductStatus = () => {
  createElement(TAG.ROOT_ID, "h3", "상품 현황");
  createTable(TABLE.PRODUCT_ID, TABLE.PRODUCT_HEAD, TABLE.PRODUCT_BODY);
};

export const drawPartCharge = () => {
  createElement(
    TAG.ROOT_ID,
    "h3",
    "자판기가 동전 충전하기",
    "vending-machine-charge-amount"
  );
  createInput(
    TAG.ROOT_ID,
    "자판기가 보유할 금액",
    "vending-machine-charge-input"
  );
  createElement(
    TAG.ROOT_ID,
    "button",
    "충전하기",
    "vending-machine-charge-button"
  );
  createElement(
    TAG.ROOT_ID,
    "div",
    "보유 금액:",
    "vending-machine-charge-amount"
  );
};

export const drawPartHasCoin = () => {
  createElement(
    TAG.ROOT_ID,
    "h3",
    "자판기가 보유한 동전",
    "vending-machine-charge-amount"
  );
  createTable(TABLE.COIN_ID, TABLE.COIN_HEAD, TABLE.COIN_BODY);
};
