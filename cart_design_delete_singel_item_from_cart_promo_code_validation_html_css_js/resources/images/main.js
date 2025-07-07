const product = [
    {
        image: './resources/images/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        image: './resources/images/hh-1.jpg',
        title: 'Air Pods Pro',
        price: 150,
    },
    {
        image: './resources/images/ee-1.jpg',
        title: '250 DSLR Camera',
        price: 230,
    },
    {
        image: './resources/images/aa-1.jpg',
        title: 'Headphones',
        price: 100,
    },
]

const categories = [...new Set(product.map((item) =>
    {return item}))];

const displaycart = () => {
    let j = 0;
    if (categories.length == 0) {
        document.getElementById("root").innerHTML = "Your cart is empty";
    }else {
        document.getElementById("root").innerHTML = categories.map((items) => {
            let {image, title, price} = items;

            return (
                `<tr>
                    <td width="150"><div class="img-box"><img class="img" src=${image}></div></td>
                    <td width="360"><p style="font-size: 15px;"></p></td>
                    <td width="150"><h2 style="font-size: 15px; color: red;">$ ${price}.00</h2></td>
                    <td width="70">`+"<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></td>"+
                `</tr>`
            );
        }).join('');
    }
}

displaycart();