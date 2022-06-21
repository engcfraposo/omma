import { configureStore } from '@reduxjs/toolkit'
import recipesReducer from "./recipes"

export const store = configureStore({
    reducer: {
        recipesReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch