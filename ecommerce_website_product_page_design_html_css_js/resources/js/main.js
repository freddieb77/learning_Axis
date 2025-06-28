const product = [
    {
        id: 1, 
        image: 'resources/images/aa-1.jpg',
        title: 'Headphones',
        price: '$20',
    },
    {
        id: 2, 
        image: 'resources/images/bb-1.jpg',
        title: 'Rode NT1 Microphone',
        price: '$45',   
    },
    {
        id: 3,
        image: 'resources/images/cc-1.jpg',
        title: 'Smart Watch',
        price: '$30',
    },
    {
        id: 4,
        image: 'resources/images/dd-1.jpg',
        title: 'HP Laptop Next Generation',
        price: '$70',
    },
    {
        id: 5,
        image: 'resources/images/ee-1.jpg',
        title: '250d DSLR Camera',
        price: '$60',
    },
    {
        id: 6,
        image: 'resources/images/ff-1.jpg',
        title: 'Metal Desk Lamp',
        price: '$35',
    },
    {
        id: 7,
        image: 'resources/images/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: '$55',
    },
    {
        id: 8,
        image: 'resources/images/hh-1.jpg',
        title: 'Air Pods Pro',
        price: '$50',
    },
]

const categories = [...new Set(product.map((item) =>
    {return item}))]

let cart = document.getElementById('root')
cart.innerHTML = categories.map((item) =>
{
    let {image, title, price} = item;
    return (
        `<div class="box">
            <div class="img-box">
                <img src=${image}></img>
            </div>
            <div class="left">
                <p>${title}</p>
                <h2>${price}</h2>
                <button>Add to Cart</button>
            </div>
        </div>`
    )
}).join('');