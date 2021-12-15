import { STR, TABLE, ID } from "../../constants.js";
import { createElement, createTable } from "../../utils.js";
import { button } from "../../components/button.js";
import { input } from "../../components/input.js";
import { text } from "../../components/text.js";
import { subTitle } from "../../components/subTitle.js";
import { lineBreak } from "../../components/lineBreak.js";
import { table } from "../../components/table.js";

export const createTabManage = () => {
  createElement(ID.ROOT, "div", null, "tab-manage");

  const tabManageEl =
    subTitle({ text: STR.SUBTITLE_CHARGE }) +
    input({
      type: "number",
      placeholder: "자판기가 보유할 금액",
      className: "vending-machine-charge-input",
    }) +
    button({ text: "충전하기", className: "vending-machine-charge-button" }) +
    lineBreak() +
    text({ text: "보유 금액: " }) +
    text({ text: "", className: "vending-machine-charge-amount" }) +
    subTitle({ text: STR.SUBTITLE_HAS_COIN }) +
    table({
      id: TABLE.MANAGE_ID,
      thead: ["동전", "개수"],
      tbody: [
        ["500원", ""],
        ["100원", ""],
        ["50원", ""],
        ["10원", ""],
      ],
    });

  document.getElementById("tab-manage").innerHTML = tabManageEl;
  createTable(TABLE.PRODUCT_ID, TABLE.PRODUCT_HEAD, TABLE.PRODUCT_BODY);
};
