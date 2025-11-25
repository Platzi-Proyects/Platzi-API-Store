export async function updateProduct(id, newName) {
    const bodyData = {
        name: newName
    };

    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyData)
        });

        const result = await response.json();
        console.log("Producto actualizado:", result);
        return result;
    } catch (error) {
        console.error("Error actualizando producto:", error);
    }
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