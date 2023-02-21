const product = [
    {
        id: 0,
        image: 'image/aa-1.jpg',
        title: ' model 1',
        price: 20,
    },
    {
        id: 1,
        image: 'image/ss-2.jpg',
        title: 'model 2',
        price: 20,
    },
    {
        id: 2,
        image: 'image/dd-3.jpg',
        title: 'model 3',
        price: 30,
    },
    {
        id: 3,
        image: 'image/ff-4.jpg',
        title: 'model 4',
        price: 299,
    },
    {
        id: 4,
        image: 'image/gg-5.jpg',
        title: 'model 5',
        price: 330,
    },
    {
        id: 5,
        image: 'image/hh-6.jpg',
        title: 'model 6',
        price: 150,
    },
    {
        id: 6,
        image: 'image/jj-7.jpg',
        title: 'model 7',
        price: 270,
    },
    {
        id: 7,
        image: 'image/kk-8.jpg',
        title: 'model 8',
        price: 260,
    },
    {
        id: 8,
        image: 'image/ll-9.jpg',
        title: 'model 9',
        price: 420,
    },
    {
        id: 9,
        image: 'image/zz-10.jpg',
        title: 'model 10',
        price: 130,
    },
    {
        id: 10,
        image: 'image/xx-11.jpg',
        title: 'model 11',
        price: 410,
    },
    {
        id: 11,
        image: 'image/cc-12.jpg',
        title: 'model 12',
        price: 180,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
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

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
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