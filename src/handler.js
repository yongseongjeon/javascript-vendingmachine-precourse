let tabAddEl = document.getElementById("tab-add");
let tabManageEl = document.getElementById("tab-manage");
let tabPurchaseEl = document.getElementById("tab-purchase");

export const showTabAdd = () => {
  updateTabEl();
  tabAddEl.style.display = "block";
  tabManageEl.style.display = "none";
  tabPurchaseEl.style.display = "none";
};

export const showTabManage = () => {
  updateTabEl();
  tabAddEl.style.display = "none";
  tabManageEl.style.display = "block";
  tabPurchaseEl.style.display = "none";
};

export const showTabPurchase = () => {
  updateTabEl();
  tabAddEl.style.display = "none";
  tabManageEl.style.display = "none";
  tabPurchaseEl.style.display = "block";
};

const updateTabEl = () => {
  tabAddEl = document.getElementById("tab-add");
  tabManageEl = document.getElementById("tab-manage");
  tabPurchaseEl = document.getElementById("tab-purchase");
};
