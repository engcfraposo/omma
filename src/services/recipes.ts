import axios from "axios"

interface Recipe {
    id: number;
    title: string;
    image_url: string;
}

const baseUrl = axios.create({
    baseURL: "http://localhost:3333"
})

export const getRecipes = async (): Promise<Recipe[]> => {
    try {
        const response = await baseUrl.get("/recipes")
        return response.data
    } catch (error) {
        throw new Error("Não foi possivel pegar os dados")
    }
}

export const postRecipes = async(newRecipe: Omit<Recipe, "id">): Promise<Recipe> => {
    try {
        const response = await baseUrl.post("/recipes", newRecipe)
        return response.data
    } catch (error) {
        throw new Error("Não foi possivel pegar os dados")
    }
}