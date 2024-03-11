function deleteItem(e) {
    // Acceder al elemento del producto más cercano
    var product = e.currentTarget.parentNode.parentNode;

    // Resetear el valor del input de cantidad a 0
    var qtyInput = product.getElementsByClassName("Unidad")[0];
    qtyInput.value = 0;

    // Resetear el texto del precio total del producto a 0€
    var totalPriceElement = product.getElementsByClassName("product-total")[0];
    totalPriceElement.innerText = "0€";

    // Opcionalmente, puedes llamar a getTotalPrice para actualizar el precio total si es necesario
    // a medida que borramos se puede ver el valor restante
    getTotalPrice();

}


function getPriceByArticle(article) {
    var price = article.getElementsByClassName("precio-artículo")[0].children[0];
    price = parseInt(price.innerText.slice(0, price.innerText.length - 1), 10);
    var qty = article.getElementsByClassName("unidades-artículo")[0].children[0].value;
    return price * qty;

}

/*
function updatePriceByProduct(productPrice, index) {
    var products = document.getElementsByClassName("producto");
    products[index].getElementsByClassName("product-total") [0].innerText = `${productPrice}€`;

}
*/


function getTotalPrice() {
    var articles = document.getElementsByClassName("articulo");
    var total = 0;
    for (let i = 0; i < articles.length; i++) {
        let price = getPriceByArticle(articles[i]);
        //updatePriceByProduct(price, i);
        total += price;
    }
    document.getElementById("total").innerText = `${total}€`;

}


//Este evento onload del objeto window se dispara cuando todo el contenido de la página (incluidas imágenes, scripts, hojas de estilo, etc.) se ha cargado completamente. En este punto, es seguro interactuar con el DOM porque se garantiza que todos los elementos están disponibles.
window.onload = function () {
    var calculaPricioButton = document.getElementById("calc-precio");

    var deleteButtons = document.getElementsByClassName("btn-delete");

    calculaPricioButton.onclick = getTotalPrice;


    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = deleteItem;
    }
}