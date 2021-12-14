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

export const createTable = (tagID, thead = [], tbody = [], tbodyID = []) => {
  // created DOM structure
  // table id = tagID
  //   thead
  //     tr
  //       th * thead.length
  //   tbody
  //     tr
  //       td * tbody.length id = iteration of tbodyID
  createElement("app", "table", null, tagID);

  // create table head
  createElement(tagID, "thead", null, `${tagID}-thead`);
  createElement(`${tagID}-thead`, "tr", null, `${tagID}-thead-tr`);
  thead.forEach((x) => {
    createElement(`${tagID}-thead-tr`, "th", x);
  });

  // create table body
  createElement(tagID, "tbody", null, `${tagID}-tbody`);
  tbody.forEach((x, i) => {
    createElement(`${tagID}-tbody`, "tr", null, `${tagID}-tbody-tr-${i + 1}`);
    createElement(`${tagID}-tbody-tr-${i + 1}`, "td", x);
    createElement(`${tagID}-tbody-tr-${i + 1}`, "td", null, tbodyID[i]);
  });
};
