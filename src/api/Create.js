let data = {
    "title": "New Product",
    "price": 10,
    "description": "A description",
    "categoryId": 30,
    "images": ["https://placehold.co/600x400"]
}

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

createProduct(data).then(res => console.log(res));
