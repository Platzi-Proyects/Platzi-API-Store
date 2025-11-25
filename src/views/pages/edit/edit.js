import {getProductsAll} from "../../../api/Get.js";
import {createProduct} from "../../../api/Create.js";

const getElements = document.querySelector(".get");

const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = Number(document.querySelector("#id").value);
    const title = document.querySelector("#inputText").value;
    const desc = document.querySelector("#desc").value;
    const img = document.querySelector("#img").value;
    const price = Number(document.querySelector("#price").value);

    const data = {
        title: title || "Producto sin título",
        price: price || 1,
        description: desc || "Sin descripción",
        categoryId: id || 1,
        images: [img || "https://placehold.co/600x400"]
    };


    try {
        const result = await createProduct(data);
        alert(JSON.stringify(result));
        location.reload();
    } catch (error) {
        alert("Error: " + error);
    }
});

getProductsAll().then(products => {
    for (const product of products) {
        const html = `
      <div class="col-3 col-md-2 p-2 bg-fourth-p rounded-4 mt-3 mx-md-5 mx-2
           d-flex flex-column align-items-center text-center">
        <img src="${product.images?.[0] ?? 'placeholder.jpg'}"
             alt="Product ${product.id}"
             height="225"
             class="rounded-3 img-fluid"
             style="object-fit: cover;">
        <p class="text-white mt-2">${product.title}</p>
        <p class="text-white mt-2">$ ${product.price}</p>
        <p class="text-white mt-2">ID: ${product.id}</p>
      </div>
    `;
        getElements.innerHTML += html;
    }
});


