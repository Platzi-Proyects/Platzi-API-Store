export async function deleteProduct(id) {
    const url = `https://api.escuelajs.co/api/v1/products/${id}`;

    const response = await fetch(url, {
        method: "DELETE"
    });

    return await response.json();
}


async function deleteCategory(id) {
    const url = `https://api.escuelajs.co/api/v1/categories/${id}`;

    const response = await fetch(url, {
        method: "DELETE"
    });

    return await response.json();
}
