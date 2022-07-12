import { configureStore, createStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import translationReducer from "./features/translation/translationSlice";
// console.log(translationReducer)
export const store = configureStore({
    reducer: {
        language: translationReducer
    }
})

