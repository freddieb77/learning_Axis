const product = [
    {
        id: 0,
        image: 'resources/images/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'resources/images/hh-1.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'resources/images/ee-1.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'resources/images/aa-1.jpg',
        title: 'Headphones',
        price: 100,
    },
    {
        id: 4, 
        image: 'resources/images/bb-1.jpg',
        title: 'Audio Microphone',
        price: 230,
    },
    {
        id: 5, 
        image: 'resources/images/cc-1.jpg',
        title: 'Smart Watch',
        price: 100,
    },
]

const categories = [...new Set(product.map((item) => {return item}))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();;
    const filterData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        let {image, title, price} = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                    <button>Add to Cart</button>
                </div>
            </div>`
        )
    }).join('')
};

displayItem(categories);