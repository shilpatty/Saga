export default function decorate(block) {
  // UE instrumentation on the block container
  block.setAttribute('data-aue-resource', 'urn:aemconnection:/content/saga/hero/jcr:content');
  block.setAttribute('data-aue-type', 'component');
  block.setAttribute('data-aue-label', 'Hero');

  const rows = [...block.children];

  // Row 0: background image
  const imgWrapper = rows[0]?.querySelector('picture, img');
  if (imgWrapper) {
    block.style.backgroundImage = `url(${imgWrapper.querySelector('img')?.src || imgWrapper.src})`;
    rows[0].remove();
  }

  // Build overlay content
  const overlay = document.createElement('div');
  overlay.className = 'hero-overlay';

  // Row 0 (now): heading
  const headingRow = rows[1] || rows[0];
  if (headingRow) {
    const heading = headingRow.querySelector('h1, h2, p') || headingRow;
    heading.setAttribute('data-aue-prop', 'heading');
    heading.setAttribute('data-aue-type', 'richtext');
    overlay.appendChild(heading);
    headingRow.remove();
  }

  // Row 1: description text
  const textRow = rows[2] || rows[1];
  if (textRow) {
    const text = textRow.querySelector('p') || textRow;
    text.setAttribute('data-aue-prop', 'text');
    text.setAttribute('data-aue-type', 'richtext');
    overlay.appendChild(text);
    textRow.remove();
  }

  // Row 2: CTA
  const ctaRow = rows[3] || rows[2];
  if (ctaRow) {
    const link = ctaRow.querySelector('a');
    if (link) {
      link.className = 'hero-cta';
      link.setAttribute('data-aue-prop', 'cta');
      link.setAttribute('data-aue-type', 'text');
      overlay.appendChild(link);
    }
    ctaRow.remove();
  }

  block.innerHTML = '';
  block.appendChild(overlay);
}
