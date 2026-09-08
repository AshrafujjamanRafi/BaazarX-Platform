const products=[
    {
        id:1,
        name:"Stylish headphone",
        price:790,
        category:"electronics",
        image:"headphone.jpg"
    },
    {
        id:2,
        name:"Nike shoes",
        price:7900,
        category:"shoes",
        image:"shoes.jpg"
    },
    {
        id:3,
        name:"White T-shirt",
        price:500,
        category:"clothing",
        image:"tshirt.jpg"
    },
    {
        id:4,
        name:"Wallet",
        price:1000,
        category:"accessories",
        image:"wallet.jpg"
    },
    {
        id:5,
        name:"Speaker",
        price:1500,
        category:"accessories",
        image:"speaker.jpg"
    },
    {
        id:6,
        name:"Rolex Watch",
        price:3999,
        category:"clothing",
        image:"watch.jpg"
    },
]
const productList=document.getElementById("products")
function productDisplay(){
     productList.innerHTML=``
     products.forEach(element => {
        const card=document.createElement("div")
        card.className="product-card"
        productList.appendChild(card)
        const image=document.createElement("img")
        image.src=element.image
        card.appendChild(image)
        const productName=document.createElement("p")
        productName.textContent=element.name
        card.appendChild(productName)
        const productPrice=document.createElement("p")
        productPrice.textContent="৳"+ element.price
        card.appendChild(productPrice)
         const productCategory=document.createElement("p")
        productCategory.textContent=element.category
        card.appendChild(productCategory)
        const cartButton=document.createElement("button")
        cartButton.className="add-cart"
        cartButton.textContent="Add to Cart"
        cartButton.dataset.id=element.id
        card.appendChild(cartButton)
        let count=0;
        cartButton.addEventListener("click",function(){
            const cartCount=document.getElementById("cartCount")
        count+=1;
          cartCount.innerHTML=`${count}`
})
    });
}
productDisplay()

