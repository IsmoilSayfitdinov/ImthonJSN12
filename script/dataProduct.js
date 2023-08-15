const API_BASE = "https://api.escuelajs.co/api/v1"
const PRODUCT_ID = +window.location.hash.replace("#","");


(async ()=>{
    try{
       const response = await fetch(API_BASE + "/products/" + PRODUCT_ID)
       const dataProducts = await response.json()
       const imgaProduct = document.getElementById("img_wrapp")

        if(dataProducts){
            imgaProduct.innerHTML = `<img src="${dataProducts.images}" alt="" class="img_product"style="width: 500px; height: 500px;"> `
            ProductTitle.innerHTML = dataProducts.title
            ProductDesc.innerHTML = dataProducts.description
            ProductPrice.innerHTML = `${dataProducts.price}<i class="fa-solid fa-ruble-sign"></i> / <del>3209 <i class="fa-solid fa-ruble-sign"></i>`

            const btn = document.querySelector(".buttonProductToKorzink")

           btn.addEventListener('click',()=>{
             btn.innerHTML = `<a href="../pages/korzinka.html#${dataProducts.id}" class="buttonProductToKorzink"> КОРЗИНКА</a>`
            
        })
        }
    }
    catch(error){
       console.log(error);
    }
})()


