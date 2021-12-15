export const createElement = (parentID, tag, text, tagID = null) => {
  const el = document.createElement(tag);
  if (tagID) {
    el.setAttribute("id", tagID);
  }
  el.innerText = text;
  document.getElementById(parentID).appendChild(el);
  return el;
};

export const setObjLocalStorage = (key, obj) => {
  localStorage.setItem(key, JSON.stringify(obj));
};

export const getObjLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const addTableBody = (tableID, tbody = [], tdClassName = []) => {
  const tbodyEl = document.querySelector(`#${tableID} tbody`);
  const el = `<tr>${tbody
    .map((x, i) => `<td class="${tdClassName[i]}">${x}</td>`)
    .join("")}</tr>`;
  tbodyEl.insertAdjacentHTML("beforeend", el);
};
