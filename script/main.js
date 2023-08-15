//bu sectionda 12 ta carda va api larni chiqarish ucun

const api_base = "https://api.escuelajs.co/api/v1"
const fetchElement = document.querySelector("#fetchProduct")


fetch(`${api_base}/products`)
.then(respons => respons.json())
.then(data => {
   let dataSlice =  data.slice(0,23)
  render(dataSlice)
  

})


function render(data){
  const postFragment = document.createDocumentFragment()
  data.map(({price,title,description,images,id})=>{
   
    const divPost = document.createElement('div')
    divPost.classList.add('DivFetch')
    divPost.innerHTML = `
      <a href="./pages/dataProduct.html#${id}"> <img src="${images}" alt="" class="Img-style"></a>
      <h3 class="ShopTitle">${title}</h3>
      <p class="ShopDesc">${description.slice(0,50)+ (description.length > 30 ? "...":"")}</p>
      <p class="ShopPrice">${price} <i class="fa-solid fa-ruble-sign"></i> / <del>3209 <i class="fa-solid fa-ruble-sign"></i></del></p>
    `
    postFragment.appendChild(divPost)
  })
  fetchElement.appendChild(postFragment)
}


// bu Service qismida 4 ta card va api larni  chiqarish ushcun

const api_service = "https://api.escuelajs.co/api/v1"
const service = document.querySelector(".service")

fetch(`${api_service}/categories`)
.then(response => response.json())
.then(dataService =>{
  let dataServiceSlice =  dataService.slice(0,4)
  renderSliceServcie(dataServiceSlice)
})


function renderSliceServcie(dataSliceSerc){
  const fragmentSlice = document.createDocumentFragment() 
  dataSliceSerc.map(({name})=>{
    const dive = document.createElement('div')
    dive.classList.add("SliceDiv")
    dive.innerHTML = `   
    <a href="../pages/category.html"><img src="./img/Rectangle 19.png" alt=""></a>
       <p class="service_p">${name}</p>
      <p class="service_pa">3340 <i class="fa-solid fa-ruble-sign"></i></p>
    `
    fragmentSlice.appendChild(dive)
    
  })
  service.appendChild(fragmentSlice)
}



const filterMin = document.querySelector(".input_min_pirce")
const FilterMax = document.querySelector(".input_max_pirce")


console.log(FilterMax.valu);
