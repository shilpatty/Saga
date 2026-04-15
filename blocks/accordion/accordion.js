export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    const cells = [...row.children];
    const question = cells[0]?.textContent?.trim() || '';
    const answerContent = cells[1]?.innerHTML || '';

    const item = document.createElement('div');
    item.className = 'accordion-item';

    const header = document.createElement('button');
    header.className = 'accordion-header';
    header.setAttribute('aria-expanded', 'false');
    header.textContent = question;

    const icon = document.createElement('span');
    icon.className = 'accordion-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '+';
    header.appendChild(icon);

    const body = document.createElement('div');
    body.className = 'accordion-body';
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
