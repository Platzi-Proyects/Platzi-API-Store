import {getProducts, getProductsById, getCategoryById, getCategory} from "/src/api/Get.js";

const gridContainer = document.querySelector(".category");
const gridItems = document.querySelector(".products");

getCategory().then((categories) => {
    for (const category of categories) {
        const html = `
            <div class="row py-2 my-4 bg-fourth-p rounded-5 align-items-center">
                <div class="col-5 col-md-4 d-flex justify-content-center">
                    <img src="${category.image}" alt="${category.slut}" 
                         height="100" width="100" class="rounded-4">
                </div>

                <div class="col-5 col-md-4 d-flex align-items-center">
                    <h2 class="text-light m-0">${category.name}</h2>
                </div>
            </div>
        `;
        gridContainer.innerHTML += html;
    }
});


getProducts().then(products => {
    for (const product of products) {
        const html = `
<div class="col-5 col-md-2 p-2 bg-fourth-p rounded-4 mt-3 mx-md-5 mx-2
     d-flex flex-column align-items-center text-center">
    <img src="${product.images}" 
         alt="${product.title}" 
         height="225" 
         class="rounded-3 img-fluid"
         style="object-fit: cover;">
    <p class="text-white mt-2">${product.title}</p>
    <p class="text-light">${product.price}</p>
</div>
        `;
        gridItems.innerHTML += html;
    }
});
