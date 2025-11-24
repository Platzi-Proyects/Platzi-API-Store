export async function getProducts() {
    try {
        const api = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=4");
        const db = await api.json();
        return db;
    } catch (error) {
        console.log(error);
    }
}

export async function getProductsById(id) {
    try {
        const api = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        const db = await api.json();
        console.log(db);
    } catch (error) {
        console.log(error);
    }
}

export async function getCategory() {
    try {
        const api = await fetch("https://api.escuelajs.co/api/v1/categories?offset=0&limit=5");
        const db = await api.json();
        return db;
    } catch (error) {
        console.log(error);
    }
}

export async function getCategoryById(id) {
    try {
        const api = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`);
        const db = await api.json();
        console.log(db);
    } catch (error) {
        console.log(error);
    }
}