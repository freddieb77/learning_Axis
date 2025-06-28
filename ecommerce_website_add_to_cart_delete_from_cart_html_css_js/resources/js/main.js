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
        title: '250 DSLR Camera',
        price: 230,
    },
    {
        id: 3, 
        image: 'resources/images/aa-1.jpg',
        title: 'Head Phones',
        price: 100,
    },
];

const categories = [...new Set(product.map((item) =>
    {return item}))]
    let i = 0;
document.getElementById('root').innerHTML = categories.map((item) =>
{
    let {image, title, price} = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

let cart = [];

const addtocart = (a) => {
    cart.push({...categories[a]});
    displaycart();
}

const delElement = (a) => {
    cart.splice(a, 1);
    displaycart();
}

const displaycart = (a) => {
    let j = 0, total = 0;
    document.getElementById('count').innerHTML = cart.length;

    if (cart.length == 0) {
        document.getElementById('cartitem').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML = "$ "+0+".00";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((items) =>
        {
            let {image, title, price} = items;
            total = total+price;
            document.getElementById('total').innerHTML = "$ "+total+".00";

            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}