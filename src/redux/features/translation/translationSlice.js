import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    translation: "az"
}
console.log(initialState)
export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLang: (state, action) => {
            console.log(state)
            state.translation = action.payload
        },
    },
})


export const { changeLang } = languageSlice.actions

export default languageSlice.reducer