export default function decorate(block) {
  block.setAttribute('data-aue-resource', 'urn:aemconnection:/content/saga/accordion/jcr:content');
  block.setAttribute('data-aue-type', 'container');
  block.setAttribute('data-aue-label', 'Accordion');

  const rows = [...block.children];

  rows.forEach((row, i) => {
    const cells = [...row.children];
    const question = cells[0]?.textContent?.trim() || '';
    const answerContent = cells[1]?.innerHTML || '';

    // Build accordion item
    const item = document.createElement('div');
    item.className = 'accordion-item';
    item.setAttribute('data-aue-type', 'component');
    item.setAttribute('data-aue-label', `FAQ ${i + 1}`);
    item.setAttribute('data-aue-resource', `urn:aemconnection:/content/saga/accordion/item-${i}`);

    const header = document.createElement('button');
    header.className = 'accordion-header';
    header.setAttribute('aria-expanded', 'false');
    header.setAttribute('data-aue-prop', 'question');
    header.setAttribute('data-aue-type', 'richtext');
    header.textContent = question;

    const icon = document.createElement('span');
    icon.className = 'accordion-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '+';
    header.appendChild(icon);

    const body = document.createElement('div');
    body.className = 'accordion-body';
    body.setAttribute('data-aue-prop', 'answer');
    body.setAttribute('data-aue-type', 'richtext');
    body.innerHTML = answerContent;

    header.addEventListener('click', () => {
      const isOpen = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', String(!isOpen));
      body.style.maxHeight = isOpen ? '0' : `${body.scrollHeight}px`;
      icon.textContent = isOpen ? '+' : '−';
    });

    item.appendChild(header);
    item.appendChild(body);
    row.replaceWith(item);
  });
}
