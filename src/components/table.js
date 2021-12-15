export const table = ({ id, thead = [], tbody = [[]], tbodyID = [[]] }) => {
  return `<table id="${id}">
  <thead>
    <tr>
      ${thead.map((x) => `<th>${x}</th>`).join("")}
    </tr>
  </thead>
  <tbody>
    ${tbody
      .map(
        (row, i) =>
          `<tr>${row
            .map((x, j) => `<td id="${tbodyID[i][j]}">${x}</td>`)
            .join("")}</tr>`
      )
      .join("")}
  </tbody>
</table>`;
};
