function parseProducts(json) {
    var data = JSON.parse(json);
    return data.products;
}

function renderProductsCards(json) {
    clearProducts();
    let products = parseProducts(json);
    
    let length = products.length;
    for (let i = 0; i < length; i++) {
        addProduct(products[i]);
    }
}