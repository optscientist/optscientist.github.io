(() => {
  'use strict';
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-navigation');
  if (toggle && nav) {
    const close = () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    };
    toggle.addEventListener('click', () => {
      const next = !nav.classList.contains('open');
      nav.classList.toggle('open', next);
      toggle.setAttribute('aria-expanded', String(next));
      toggle.setAttribute('aria-label', next ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 850) close(); });
  }
  const bib = document.getElementById('bibtex-code');
  const button = document.getElementById('copy-bibtex');
  if (bib && button) {
    const defaultText = button.innerHTML;
    button.addEventListener('click', async () => {
      const value = bib.textContent.trim();
      let copied = false;
      if (navigator.clipboard?.writeText) {
        try { await navigator.clipboard.writeText(value); copied = true; } catch { /* fallback below */ }
      }
      if (!copied) {
        const temp = document.createElement('textarea');
        temp.value = value;
        temp.setAttribute('readonly', '');
        temp.style.position = 'fixed';
        temp.style.opacity = '0';
        document.body.appendChild(temp);
        temp.select();
        try { copied = document.execCommand('copy'); } catch { /* select source instead */ }
        temp.remove();
      }
      if (!copied) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(bib);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      button.textContent = copied ? '✓ Copied BibTeX' : 'Selected: press Ctrl+C';
      window.setTimeout(() => { button.innerHTML = defaultText; }, 2200);
    });
  }
  const modal = document.getElementById('image-dialog');
  const big = document.getElementById('dialog-image');
  const bigTitle = document.getElementById('dialog-title');
  const open = document.getElementById('dialog-open');
  const close = document.getElementById('dialog-close');
  if (modal && big && bigTitle && open && close && typeof modal.showModal === 'function') {
    document.querySelectorAll('a.js-zoom').forEach(a => a.addEventListener('click', e => {
      e.preventDefault();
      big.src = a.getAttribute('href');
      big.alt = a.querySelector('img')?.alt || 'Enlarged paper figure';
      bigTitle.textContent = a.dataset.title || 'Paper figure';
      open.href = a.href;
      modal.showModal();
    }));
    close.addEventListener('click', () => modal.close());
    modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
    modal.addEventListener('close', () => { big.removeAttribute('src'); });
  }
})();
