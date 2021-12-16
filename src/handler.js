import { getAddTabEl, getManageTabEl, getPurchaseTabEl } from "./elements.js";

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
