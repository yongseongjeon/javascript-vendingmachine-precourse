export const table = ({ id, thead = [], tbody = [[]], tbodyID }) => {
  return `<table id="${id}">
  <thead>
    <tr>
      ${thead.map((x) => `<th>${x}</th>`).join("")}
    </tr>
  </thead>
  <tbody>
    ${tbody
      .map((row) => `<tr>${row.map((x) => `<td>${x}</td>`).join("")}</tr>`)
      .join("")}
  </tbody>
</table>`;
};
