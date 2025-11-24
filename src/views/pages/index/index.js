import {getProducts, getProductsById, getCategoryById, getCategory} from "/src/api/Get.js";

const gridContainer = document.querySelector(".category");

getCategory().then((categories) => {
    for (const category of categories) {
        const html = `
            
            <div class="row py-2 my-4 bg-fourth-p rounded-5">
                <div class="col-md-4">
                    <img src=${category.image} alt=${category.slut} height="100" width="100" class="rounded-4">
                </div>
                <div class="col-md-8">
                    <h2 class="text-light">${category.name}</h2>
                </div>
            </div>
`
        gridContainer.innerHTML += html;
    }
});

