const btn = document.querySelectorAll("#themgiohang button")
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnItem = event.target
    var product = btnItem.addEventListener
    console.log(product)
    var productImg = querySelector(".i4 img").src
    console.log(productImg)
}})
})


const cartshow = document.querySelector(".i1 ul li a img")
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "0"
})
const cartbtn = document.querySelector(".i4 .fa-x")

cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "-100%"
})