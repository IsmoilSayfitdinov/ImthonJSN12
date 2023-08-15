const API_BASE = "https://api.escuelajs.co/api/v1"
const PRODUCT_ID = +window.location.hash.replace("#","");


(async ()=>{
    try{
       const respons = await fetch(API_BASE + "/products/" + PRODUCT_ID)
       const dataProducts = await respons.json()
       const images = document.querySelector("#imgAges")

        if(dataProducts){
            images.innerHTML =  `<img src="${dataProducts.images}" alt="" style="width: 136px; height: 120px;" class="img_style">`
            Title.innerHTML = dataProducts.title
            Desc.innerHTML = dataProducts.description
            Price.innerHTML = `Итоге: ${dataProducts.price}<i class="fa-solid fa-ruble-sign"></i> / <del>3209 <i class="fa-solid fa-ruble-sign"></i>`
        }
    }
    catch(error){
       console.log(error);
    }
})()










