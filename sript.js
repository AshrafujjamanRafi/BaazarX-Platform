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
let count=0;
const productArray=[]
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
        cartButton.addEventListener("click",function(){
            const id=cartButton.dataset.id
            const singleProduct=products.find(element=>element.id==id)
            const existingProduct=productArray.find(element=>element.id == id)
            if(existingProduct){
                console.log("Already added in cart!")
                existingProduct.quantity+=1
            }
            else{
            const cartProduct={...singleProduct,quantity:1}
            productArray.push(cartProduct)
            console.log(cartProduct);
            }
            count+=1 
             const cartCount=document.getElementById("cartCount")
        cartCount.innerHTML=`${count}`
        })
    });
}
function displayCart(){
     const cartItems=document.getElementById("cartItems")
    let price=0;
    const totalPrice=document.getElementById("totalPrice")
    cartItems.innerHTML=""
    const home=document.createElement("button")
    home.textContent="HOME"
    home.className="home-btn"
    home.addEventListener("click",function(){
             document.getElementById("cart").classList.remove("active")
        })
        cartItems.appendChild(home)
    productArray.forEach(element => {
        const cartItem=document.createElement("div")
        cartItem.className="cart-item"
        const productName=document.createElement("div")
        productName.textContent=element.name
        const image=document.createElement("img")
        image.src=element.image
        const priceItem=document.createElement("p")
        priceItem.innerHTML = "Price: " + element.price + "<br>Quantity: " + element.quantity
        price+=element.price * element.quantity
        const removeButton=document.createElement("button")
        removeButton.textContent="Remove"
        removeButton.className="remove-btn"
        cartItem.appendChild(productName)
        cartItem.appendChild(image)
        cartItem.appendChild(priceItem)
          cartItem.appendChild(removeButton)
        cartItems.appendChild(cartItem)
        cartItems.appendChild(home)
        home.addEventListener("click",function(){
             document.getElementById("cart").classList.remove("active")
        })
        removeButton.addEventListener("click",function(){
            const id=element.id
            const index=productArray.findIndex(element=>element.id==id)
            count-=element.quantity
            productArray.splice(index,1)
            const cartCount=document.getElementById("cartCount")
        cartCount.innerHTML=`${count}`
            displayCart()
        })
    });
     totalPrice.innerHTML=`${price}`
}
const asideButton=document.getElementById("cartButton")
 asideButton.addEventListener("click",function(){
    console.log("cart clicked!")
    document.getElementById("cart").classList.add("active")
   displayCart()
})
productDisplay()
