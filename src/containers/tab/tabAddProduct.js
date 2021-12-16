import { STR, TABLE, ID } from "../../constants.js";
import { input } from "../../components/input.js";
import { subTitle } from "../../components/subTitle.js";
import { createElement } from "../../utils.js";
import { button } from "../../components/button.js";
import { table } from "../../components/table.js";

export const createTabAddProduct = () => {
  createElement(ID.ROOT, "div", null, "tab-add");

  const tabAddProductEl =
    subTitle({ text: STR.SUBTITLE_ADD_PRODUCT }) +
    input({
      type: "text",
      placeholder: "상품명",
      id: "product-name-input",
    }) +
    input({
      type: "number",
      placeholder: "가격",
      id: "product-price-input",
    }) +
    input({
      type: "number",
      placeholder: "수량",
      id: "product-quantity-input",
    }) +
    button({ text: "추가하기", id: "product-add-button" }) +
    subTitle({ text: STR.SUBTITLE_PRODUCT_STATUS }) +
    table({
      id: TABLE.PRODUCT_ID,
      thead: ["상품명", "가격", "수량"],
    });

  document.getElementById("tab-add").innerHTML = tabAddProductEl;
};
