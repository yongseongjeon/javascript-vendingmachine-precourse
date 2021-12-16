import {
  getAddTabEl,
  getManageTabEl,
  getNameEl,
  getPriceEl,
  getPurchaseTabEl,
  getQuantityEl,
} from "./elements.js";

export const showTabAdd = () => {
  getAddTabEl().style.display = "block";
  getManageTabEl().style.display = "none";
  getPurchaseTabEl().style.display = "none";
};

export const showTabManage = () => {
  getAddTabEl().style.display = "none";
  getManageTabEl().style.display = "block";
  getPurchaseTabEl().style.display = "none";
};

export const showTabPurchase = () => {
  getAddTabEl().style.display = "none";
  getManageTabEl().style.display = "none";
  getPurchaseTabEl().style.display = "block";
};

export const clearAddInput = () => {
  getNameEl().value = "";
  getPriceEl().value = "";
  getQuantityEl().value = "";
};
