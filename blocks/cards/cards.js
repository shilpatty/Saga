export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row, i) => {
    row.className = 'card';
    const cells = [...row.children];

    if (cells[0]) cells[0].className = 'card-icon';
    if (cells[1]) cells[1].className = 'card-heading';
    if (cells[2]) cells[2].className = 'card-text';
  });

  const grid = document.createElement('div');
  grid.className = 'cards-grid';
  grid.append(...block.children);
  block.appendChild(grid);
}
