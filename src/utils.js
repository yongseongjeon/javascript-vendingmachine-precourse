export const createElement = (parentID, tag, text, tagID = null) => {
  const el = document.createElement(tag);
  if (tagID) {
    el.setAttribute("id", tagID);
  }
  el.innerText = text;
  document.getElementById(parentID).appendChild(el);
  return el;
};
