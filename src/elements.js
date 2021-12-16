// tab button elements
export const getAddTabBtnEl = () => {
  return document.getElementById("product-add-menu");
};

export const getManageTabBtnEl = () => {
  return document.getElementById("vending-machine-manage-menu");
};

export const getPurchaseTabBtnEl = () => {
  return document.getElementById("product-purchase-menu");
};

// tab contents elements
export const getAddTabEl = () => {
  return document.getElementById("tab-add");
};

export const getManageTabEl = () => {
  return document.getElementById("tab-manage");
};

export const getPurchaseTabEl = () => {
  return document.getElementById("tab-purchase");
};

// add tab elements
export const getAddBtnEl = () => {
  return document.getElementById("product-add-button");
};

export const getNameEl = () => {
  return document.getElementById("product-name-input");
};

export const getPriceEl = () => {
  return document.getElementById("product-price-input");
};

export const getQuantityEl = () => {
  return document.getElementById("product-quantity-input");
};

// charge tab elements
export const getChargeInputEl = () => {
  return document.getElementById("vending-machine-charge-input");
};

export const getChargeAmountEl = () => {
  return document.getElementById("vending-machine-charge-amount");
};

export const getCoinQuantityElByUnit = (unit) => {
  return document.getElementById(`vending-machine-coin-${unit}-quantity`);
};

export const getChargeBtnEl = () => {
  return document.getElementById("vending-machine-charge-button");
};

// purchase tab elements
export const getInputMoneyEl = () => {
  return document.getElementById("charge-input");
};

export const getInputMoneyBtnEl = () => {
  return document.getElementById("charge-button");
};

export const getInputMoneyAmountEl = () => {
  return document.getElementById("charge-amount");
};
