async function upatedProduct(upatedProductData, id) {
    const url = `https://api.escuelajs.co/api/v1/products/${id}`;

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(upatedProductData)
    });

    return await response.json();
}

async function upatedCategory(upatedCategoryData, id) {
    const url = `https://api.escuelajs.co/api/v1/categories/${id}`;

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(upatedCategoryData)
    });

    return await response.json();
}