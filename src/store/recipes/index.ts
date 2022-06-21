import { createSlice } from "@reduxjs/toolkit";

interface Recipe {
    id: number;
    title: string;
    image_url: string;
}

interface InitialState{
    recipe: Recipe[];
}

const initialState: InitialState = {
    recipe: [] as Recipe[]
}

const recipesSlice = createSlice({
    name: "@recipes",
    initialState,
    reducers:{
        setRecipeList: (state, action) => {
            Object.assign(state, {
                ...state,
                recipe: action.payload
            })
        },
        addNewRecipe: (state, action) => {
            Object.assign(state, {
                ...state,
                recipe: [...state.recipe, action.payload ]
            })
        }
    }
})

export const { setRecipeList, addNewRecipe } = recipesSlice.actions;

export default recipesSlice.reducer