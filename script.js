const products = [
    { id: 1, title: "Product 1", price: "$10", image: "image/product1.png" },
    { id: 2, title: "Product 2", price: "$15", image: "image/product2.png" },
    { id: 3, title: "Product 3", price: "$20", image: "image/product3.png" },
    { id: 4, title: "Product 4", price: "$25", image: "image/product4.png" },
    { id: 5, title: "Product 5", price: "$30", image: "image/product1.png" },
    { id: 6, title: "Product 6", price: "$35", image: "image/product2.png" },
    { id: 6, title: "Product 6", price: "$35", image: "image/product2.png" },
    { id: 6, title: "Product 6", price: "$35", image: "image/product2.png" },
    { id: 6, title: "Product 6", price: "$35", image: "image/product2.png" },
    { id: 6, title: "Product 6", price: "$35", image: "image/product2.png" },
    { id: 6, title: "Product 6", price: "$35", image: "image/product2.png" },
    { id: 6, title: "Product 6", price: "$35", image: "image/product2.png" },
    { id: 6, title: "Product 6", price: "$35", image: "image/product2.png" },
    { id: 6, title: "Product 6", price: "$35", image: "image/product2.png" },
    
];

const productGrid = document.querySelector("#productGrid")

products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
    productItem.innerHTML = 
    `
        <img src="${product.image}" alt="${product.title}">      
        <div >
            <div class="product-title">${product.title}</div>
            <div class="product-price">${product.price}</div>
        </div>
    `;
    productGrid.appendChild(productItem);
});