function deleteItem(e) {
    // Acceder al elemento del producto más cercano
    var product = e.currentTarget.parentNode.parentNode;

    // Resetear el valor del input de cantidad a 0
    var qtyInput = product.getElementsByClassName("unidad")[0];
    qtyInput.value = 0;

    // Resetear el texto del precio total del producto a 0€
   // var totalPriceElement = product.getElementsByClassName("product-total")[0];
    //totalPriceElement.innerText = "0€";

    // Opcionalmente, puedes llamar a getTotalPrice para actualizar el precio total si es necesario
    // a medida que borramos se puede ver el valor restante
    getTotalPrice();
    getHayUnidad();

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

//==
function handleClik(){
    getTotalPrice();
    getHayUnidad();
}

//==


    calculaPricioButton.onclick = handleClik;

    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = deleteItem;
    }
}


//===================


function getHayUnidad() {
    let articlesNumbers = document.getElementsByClassName("articulo");
    let contenedorLista = document.getElementById("art");
    contenedorLista.innerHTML = '';// Limpia el contenedor para la nueva lista de artículos
   /* let nombresArticulos = "";*/
    for (let i = 0; i < articlesNumbers.length; i++) {
        let cantidad = articlesNumbers[i].getElementsByClassName("unidades-artículo")[0].getElementsByTagName("input")[0].value;
        cantidad = parseInt(cantidad, 10);
        if (cantidad >= 1) {
            let nombreArticulo = articlesNumbers[i].getElementsByClassName("nombre-artículo")[0].innerText;
           /* nombresArticulos += nombreArticulo + "\n";*/
           let elementoLista = document.createElement("li"); // Crea un nuevo elemento <li>
            elementoLista.textContent = nombreArticulo; // Establece el nombre del artículo como el contenido del <li>
            contenedorLista.appendChild(elementoLista); 
        }
        
       /* document.getElementById("art").innerText = nombresArticulos;*/
    }
    
}

/*
function getHayUnidad() {
    var articlesNumbers = document.getElementsByClassName("articulo");
    var lista = document.createElement("ul"); 
    articlesNumbers.forEach(function (articulo) {
        let cantidad = articulo.getElementsByClassName("unidades-artículo")[0].getElementsByTagName("input")[0].value;
        cantidad = parseInt(cantidad, 10);
        if (cantidad >= 1) {
            let nombreArticulo = articulo.getElementsByClassName("nombre-artículo")[0].innerText;
            let listItem = document.createElement("li"); 
            listItem.textContent = nombreArticulo; 
            lista.appendChild(listItem); 
        }
    });
    document.getElementById("art").appendChild(lista); 
}
*/