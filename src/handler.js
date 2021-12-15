const tabAddEl = document.getElementById("tab-add");
const tabManageEl = document.getElementById("tab-manage");
const tabPurchaseEl = document.getElementById("tab-purchase");

export const showTabAdd = () => {
  tabAddEl.style.display = "block";
  tabManageEl.style.display = "none";
  tabPurchaseEl.style.display = "none";
};

export const showTabManage = () => {
  tabAddEl.style.display = "none";
  tabManageEl.style.display = "block";
  tabPurchaseEl.style.display = "none";
};

export const showTabPurchase = () => {
  tabAddEl.style.display = "none";
  tabManageEl.style.display = "none";
  tabPurchaseEl.style.display = "block";
};
