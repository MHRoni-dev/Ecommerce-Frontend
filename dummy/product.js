import axios from "axios";

export async function getProducts (count= 10) {
    const result = await axios.get("https://fakestoreapi.com/products")
    return result.data.slice(0,count)
}
