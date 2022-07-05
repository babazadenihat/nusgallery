import { configureStore } from "@reduxjs/toolkit";
import translationReducer from "./features/translation/translationSlice";
console.log(translationReducer)
export const store = configureStore({
    reducer: {
        language: translationReducer
    }
})

