const API_URL = "http://localhost:3000/api";

export const getClients = async () => {
    const res = await fetch(`${API_URL}/clients`);
    return res.json();
};

export const getProducts = async () => {
    const res = await fetch(`${API_URL}/products`);
    return res.json();
}
export const getEmprendedores = async () => {
    const res = await fetch(`${API_URL}/emprendedores`);
    return res.json();
}