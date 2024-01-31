import axios from "axios"

export async function homeMenu(param, name, type) {
        const response = await axios.get(`https://api.mudoapi.tech/menus?name=${name}&type=${type}&perPage=&page=${param}`)
        return response
}

export async function signup(form) {
    const response = await axios.post(`https://api.mudoapi.tech/register`, form)
    return response
}

export async function signin(bodyPayLoad) {
    const response = await axios.post(`https://api.mudoapi.tech/login`, bodyPayLoad)
    return response
}

export async function deleteMenu(id, config) {
        const response = await axios.delete(`https://api.mudoapi.tech/menu/${id}`, config);
        return response
}

export async function detail(id) {
    const response = await axios.get(`https://api.mudoapi.tech/menu/${id}`)
    return response
}

export async function createMenu(formData, config) {
    const response = await axios.post(`https://api.mudoapi.tech/menu`, formData, config)
    return response
}

export async function editMenu(id, formData, config) {
    const response = await axios.put(`https://api.mudoapi.tech/menu/${id}`, formData, config)
    return response
}