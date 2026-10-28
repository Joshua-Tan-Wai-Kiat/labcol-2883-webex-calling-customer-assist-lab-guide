(() => {
  const dialog = document.createElement('dialog');
  dialog.className = 'screenshot-dialog';
  dialog.setAttribute('aria-label', 'Enlarged lab screenshot');
  const close = document.createElement('button');
  close.type = 'button'; close.textContent = 'Close ×';
  const image = document.createElement('img');
  dialog.append(close, image); document.body.append(dialog);
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  document.addEventListener('click', e => {
    const link = e.target.closest('a.screenshot-link');
    if (!link || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    e.preventDefault(); image.src = link.href;
    image.alt = link.querySelector('img').alt;
    dialog.showModal();
  });
})();
