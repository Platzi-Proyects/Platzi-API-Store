async function createProduct(productData) {
    const url = "https://api.escuelajs.co/api/v1/products/";

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productData)
    });

    return await response.json();
}

async function createCategory(categoryData) {
    const url = "https://api.escuelajs.co/api/v1/categories/";

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(categoryData)
    });

    return await response.json();
}

let data = {
    "name": "New Category",
    "image": "https://placeimg.com/640/480/any"
}
