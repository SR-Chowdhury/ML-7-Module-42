const addTocartBtn = () => {
    const productId = getInputValue('productId');
    const quantityId = getInputValue('quantityId');
    displayProduct(productId, quantityId);
    setValueToLocalStorage(productId, quantityId);  
}

const getInputValue = (id) => {
    const inputId = document.getElementById(id);
    const inputValue = inputId.value;
    inputId.value = '';
    return inputValue;
}

const displayProduct = (product, quantity) => {
    const ol = document.getElementById('olId');
    const li = document.createElement('li');
    li.innerText = `${product} = ${quantity}`;
    ol.appendChild(li);
}

const getValueFromLocalStorage = () => {
    let cart = {};
    const localStorageValue = localStorage.getItem('cart');
    if(localStorageValue) {
        cart = JSON.parse(localStorageValue);
    }
    return cart;
}

const setValueToLocalStorage = (product, quantity) => {
    const cart = getValueFromLocalStorage();
    cart[product] = quantity;
    // console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const displayValueFromLocalStorage = () => {
    const cartObject = getValueFromLocalStorage();

    for (const key in cartObject) {
        console.log(key, cartObject[key]);
        displayProduct(key, cartObject[key]);
    }
}

displayValueFromLocalStorage();