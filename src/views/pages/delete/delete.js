import {deleteProduct} from "../../../api/Delete.js";
import {getProductsAll} from "/src/api/Get.js";

const getElements = document.querySelector(".get");

getProductsAll().then(products => {
    for (const product of products) {
        const html = `
<div class="col-3 col-md-2 p-2 bg-fourth-p rounded-4 mt-3 mx-md-5 mx-2
     d-flex flex-column align-items-center text-center">
    <img src="${product.images}" 
         alt="${product.id}" 
         height="225" 
         class="rounded-3 img-fluid"
         style="object-fit: cover;">
             <p class="text-white mt-2">${product.title}</p>

    <p class="text-white mt-2">ID: ${product.id}</p>
</div>
        `;
        getElements.innerHTML += html;
    }
});

const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = Number(document.querySelector("#inputText").value);
    const confirm = document.querySelector("#exampleCheck1").checked;

    if (!confirm) {
        alert("Debes confirmar antes de borrar.");
        return;
    }

    try {
        const result = await deleteProduct(id);
        alert(id +" Borrado");
        location.reload()
    } catch (error) {
        alert(error);
    }
});

