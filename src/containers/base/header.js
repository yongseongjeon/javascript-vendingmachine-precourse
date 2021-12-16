import { STR, ID } from "../../constants.js";
import { createElement } from "../../utils.js";
import { button } from "../../components/button.js";
import { title } from "../../components/title.js";

export const createHeader = () => {
  createElement(ID.ROOT, "div", null, "header");

  const headerEl =
    title({ text: STR.TITLE }) +
    button({ text: STR.TAB_ADD_PRODUCT, id: "product-add-menu" }) +
    button({ text: STR.TAB_MANAGE, id: "vending-machine-manage-menu" }) +
    button({
      text: STR.TAB_PURCHASE_PRODUCT,
      id: "product-purchase-menu",
    });

  document.getElementById("header").innerHTML = headerEl;
};
