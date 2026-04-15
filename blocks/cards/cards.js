export default function decorate(block) {
  // UE instrumentation on container
  block.setAttribute('data-aue-resource', 'urn:aemconnection:/content/saga/cards/jcr:content');
  block.setAttribute('data-aue-type', 'container');
  block.setAttribute('data-aue-label', 'Cards');

  const rows = [...block.children];

  rows.forEach((row, i) => {
    row.className = 'card';
    row.setAttribute('data-aue-type', 'component');
    row.setAttribute('data-aue-label', `Card ${i + 1}`);
    row.setAttribute('data-aue-resource', `urn:aemconnection:/content/saga/cards/card-${i}`);

    const cells = [...row.children];

    // Cell 0: icon/image
    if (cells[0]) {
      cells[0].className = 'card-icon';
    }

    // Cell 1: heading
    if (cells[1]) {
      cells[1].className = 'card-heading';
      const heading = cells[1].querySelector('h1,h2,h3,h4,p') || cells[1];
      heading.setAttribute('data-aue-prop', 'heading');
      heading.setAttribute('data-aue-type', 'richtext');
    }

    // Cell 2: description
    if (cells[2]) {
      cells[2].className = 'card-text';
      const text = cells[2].querySelector('p') || cells[2];
      text.setAttribute('data-aue-prop', 'text');
      text.setAttribute('data-aue-type', 'richtext');
    }
  });

  // Wrap in a grid container
  const grid = document.createElement('div');
  grid.className = 'cards-grid';
  grid.append(...block.children);
  block.appendChild(grid);
}
