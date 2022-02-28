document.querySelectorAll('.package_price').forEach( node => {
    node.textContent = new Intl.NumberFormat('ru-Ru', {
        currency: 'rub',
        style: 'currency'
    }).format(node.textContent)
})

M.Tabs.init(document.querySelectorAll('.tabs'));
