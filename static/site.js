(function () {
  'use strict';
  const copyButton = document.getElementById('copy-bibtex');
  const bibtexCode = document.getElementById('bibtex-code');
  if (copyButton && bibtexCode) {
    let feedbackTimer;
    copyButton.addEventListener('click', async () => {
      const value = bibtexCode.textContent;
      let copied = false;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(value);
          copied = true;
        } else {
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(bibtexCode);
          selection.removeAllRanges();
          selection.addRange(range);
          copied = document.execCommand('copy');
        }
      } catch (_) { /* Selection remains a usable fallback. */ }
      if (!copied) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(bibtexCode);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      copyButton.textContent = copied ? 'Copied!' : 'Selected';
      window.clearTimeout(feedbackTimer);
      feedbackTimer = window.setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; }, 1800);
    });
  }

  const modal = document.getElementById('zoom-dialog');
  const image = document.getElementById('zoom-img');
  const sourceLink = document.getElementById('zoom-open');
  const title = document.getElementById('zoom-title');
  const viewport = document.getElementById('zoom-viewport');
  if (!modal || !image || !sourceLink || !title || !viewport) return;

  let fittedWidth = 1;
  let magnification = 1;
  const display = () => {
    image.style.width = `${Math.round(fittedWidth * magnification)}px`;
    image.style.maxWidth = 'none';
    image.style.maxHeight = 'none';
    document.getElementById('zoom-out').disabled = magnification <= 1;
    document.getElementById('zoom-in').disabled = magnification >= 5;
  };
  const fit = () => {
    if (!image.naturalWidth || !image.naturalHeight) return;
    const scale = Math.min(
      (viewport.clientWidth - 20) / image.naturalWidth,
      (viewport.clientHeight - 20) / image.naturalHeight,
      1
    );
    fittedWidth = image.naturalWidth * scale;
    magnification = 1;
    display();
    viewport.scrollTop = 0;
    viewport.scrollLeft = 0;
  };
  image.addEventListener('load', fit);
  document.querySelectorAll('.js-zoom').forEach(anchor => {
    anchor.addEventListener('click', event => {
      if (typeof modal.showModal !== 'function') return;
      event.preventDefault();
      image.alt = anchor.querySelector('img')?.alt || 'Research figure';
      sourceLink.href = anchor.href;
      title.textContent = anchor.dataset.title || 'Research figure';
      image.src = anchor.href;
      modal.showModal();
      if (image.complete && image.naturalWidth) fit();
    });
  });
  document.getElementById('zoom-in').addEventListener('click', () => {
    magnification = Math.min(5, magnification * 1.6);
    display();
  });
  document.getElementById('zoom-out').addEventListener('click', () => {
    magnification = Math.max(1, magnification / 1.6);
    display();
  });
  document.getElementById('zoom-reset').addEventListener('click', fit);
  document.getElementById('zoom-close').addEventListener('click', () => modal.close());
  modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });
  window.addEventListener('resize', () => { if (modal.open && magnification === 1) fit(); });
})();
