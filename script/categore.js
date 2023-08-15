const api = "https://api.escuelajs.co/api/v1/categories"
const container = document.querySelector(".containere")

fetch(api)
.then(res=> res.json())
.then(data =>{
    renderCate(data)
})



function renderCate(data){
  const fragment = document.createDocumentFragment()
   data.map(({name,image,creationAt,updatedAt})=>{
   const div = document.createElement('div')
   div.classList.add("categorie_style")
      div.innerHTML = `
      <img src="${image}" alt="Rasm Bor Uchirib Yuborligan shakili" style="width: 300px;height: 300px;">
        <h3 class="name_categorie">${name}</h3>
        <p class="creationAt_categorie">${creationAt}</p>
        <p class="upAt_categorie">${updatedAt}</p>

      `
      fragment.appendChild(div)
   })
   container.appendChild(fragment)
}