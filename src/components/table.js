export const table = ({ id, thead = [], tbody = [[]], tdID = [[]] }) => {
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
            .map((x, j) => `<td id="${tdID[i][j]}">${x}</td>`)
            .join("")}</tr>`
      )
      .join("")}
  </tbody>
</table>`;
};
