import { configureStore, createStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist/es";
import storage from "redux-persist/lib/storage";
import translationReducer from "./features/translation/translationSlice";
import { rootReducer } from "./rootReducer";
// console.log(translationReducer)
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}


// export const store = configureStore({
//     reducer: {
//         language: translationReducer
//     }
// })

