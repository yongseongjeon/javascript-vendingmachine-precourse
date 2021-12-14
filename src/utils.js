export const createElement = (parentID, tag, text, tagID = null) => {
  const el = document.createElement(tag);
  if (tagID) {
    el.setAttribute("id", tagID);
  }
  el.innerText = text;
  document.getElementById(parentID).appendChild(el);
  return el;
};

export const createInput = (parentID, placeholder, tagID = null) => {
  const el = document.createElement("input");
  if (tagID) {
    el.setAttribute("id", tagID);
  }
  el.placeholder = placeholder;
  document.getElementById(parentID).appendChild(el);
  return el;
};

export const createTable = (tagID, thead, tbody) => {
  createElement("app", "table", null, tagID);
  createElement(tagID, "thead", null, `${tagID}-thead`);
  createElement(`${tagID}-thead`, "tr", null, `${tagID}-thead-tr`);
  thead.forEach((x) => {
    createElement(`${tagID}-thead-tr`, "th", x);
  });

  createElement(tagID, "tbody", null, `${tagID}-tbody`);

  tbody.forEach((x, i) => {
    createElement(`${tagID}-tbody`, "tr", null, `${tagID}-tbody-tr-${i + 1}`);
    createElement(`${tagID}-tbody-tr-${i + 1}`, "td", x);
    createElement(
      `${tagID}-tbody-tr-${i + 1}`,
      "td",
      null,
      "vending-machine-coin-500-quantity"
    );
  });
};
