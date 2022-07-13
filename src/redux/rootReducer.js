import { combineReducers } from "redux";
import sortableItemSlice from "./features/sortableItems/sortableItemSlice";
import languageSlice from "./features/translation/translationSlice";


export const rootReducer = combineReducers({
    language: languageSlice,
    sortableItems: sortableItemSlice,
})