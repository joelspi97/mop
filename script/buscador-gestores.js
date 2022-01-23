const items = Array.from(document.querySelectorAll('.item-buscador'));
items.forEach(i => {
    const itemUrl = i.dataset.url;
    i.addEventListener('click', () => window.location=itemUrl);
    i.addEventListener('keyup', e => { if (e.key === 'Enter') window.location=itemUrl });
});
