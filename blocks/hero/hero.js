export default function decorate(block) {
  const rows = [...block.children];

  // Row 0: background image
  const imgWrapper = rows[0]?.querySelector('picture, img');
  if (imgWrapper) {
    const imgSrc = imgWrapper.querySelector('img')?.src || imgWrapper.src;
    if (imgSrc) block.style.backgroundImage = `url(${imgSrc})`;
    rows[0].remove();
  }

  // Build overlay content
  const overlay = document.createElement('div');
  overlay.className = 'hero-overlay';

  // Heading
  const headingRow = rows[1] || rows[0];
  if (headingRow) {
    const heading = headingRow.querySelector('h1, h2, p') || headingRow;
    overlay.appendChild(heading);
    headingRow.remove();
  }

  // Text
  const textRow = rows[2] || rows[1];
  if (textRow) {
    const text = textRow.querySelector('p') || textRow;
    overlay.appendChild(text);
    textRow.remove();
  }

  // CTA
  const ctaRow = rows[3] || rows[2];
  if (ctaRow) {
    const link = ctaRow.querySelector('a');
    if (link) {
      link.className = 'hero-cta';
      overlay.appendChild(link);
    }
    ctaRow.remove();
  }

  block.innerHTML = '';
  block.appendChild(overlay);
}
