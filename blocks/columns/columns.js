export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    row.className = 'columns-row';
    const cells = [...row.children];
    cells.forEach((cell, i) => {
      cell.className = i === 0 ? 'columns-text' : 'columns-image';
    });
  });
}
