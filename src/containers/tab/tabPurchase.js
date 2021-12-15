import { STR, TABLE, ID } from "../../constants.js";
import { createElement, createTable } from "../../utils.js";
import { button } from "../../components/button.js";
import { input } from "../../components/input.js";
import { text } from "../../components/text.js";
import { subTitle } from "../../components/subTitle.js";
import { lineBreak } from "../../components/lineBreak.js";
import { table } from "../../components/table.js";

export const createTabPurchase = () => {
  createElement(ID.ROOT, "div", null, "tab-purchase");

  const tabPurchaseEl =
    subTitle({ text: STR.SUBTITLE_INPUT_MONEY }) +
    input({
      type: "number",
      placeholder: "투입할 금액",
      className: "charge-input",
    }) +
    button({ text: "투입하기", className: "charge-button" }) +
    lineBreak() +
    text({ text: "투입할 금액: " }) +
    text({ text: "", className: "charge-amount" }) +
    subTitle({ text: STR.SUBTITLE_CAN_PURCHASE_STATE }) +
    table({
      id: TABLE.PURCHASE_ID,
      thead: TABLE.PURCHASE_HEAD,
    }) +
    subTitle({ text: STR.SUBTITLE_CHANGES }) +
    button({ text: "반환하기", className: "coin-return-button" }) +
    table({
      thead: ["동전", "갯수"],
      tbody: [
        ["500원", ""],
        ["100원", ""],
        ["50원", ""],
        ["10원", ""],
      ],
    });

  document.getElementById("tab-purchase").innerHTML = tabPurchaseEl;
};
