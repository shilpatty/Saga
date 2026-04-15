export default function decorate(block) {
  block.setAttribute('data-aue-resource', 'urn:aemconnection:/content/saga/columns/jcr:content');
  block.setAttribute('data-aue-type', 'container');
  block.setAttribute('data-aue-label', 'Columns');

  const rows = [...block.children];

  rows.forEach((row) => {
    row.className = 'columns-row';
    const cells = [...row.children];

    cells.forEach((cell, i) => {
      cell.className = i === 0 ? 'columns-text' : 'columns-image';

      if (i === 0) {
        // Text column
        const heading = cell.querySelector('h1,h2,h3');
        if (heading) {
          heading.setAttribute('data-aue-prop', 'heading');
          heading.setAttribute('data-aue-type', 'richtext');
        }
        const text = cell.querySelector('p');
        if (text) {
          text.setAttribute('data-aue-prop', 'text');
          text.setAttribute('data-aue-type', 'richtext');
        }
      } else {
        // Image column
        const img = cell.querySelector('img');
        if (img) {
          img.setAttribute('data-aue-prop', 'image');
          img.setAttribute('data-aue-type', 'media');
        }
      }
    });
  });
}
