import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ordered: []
}

export const sortableSlice = createSlice({
    name: "sortable",
    initialState,
    reducers: {
        sortItems: (state, actions) => {
            state.ordered = actions.payload
        }
    }
})

export const { sortItems } = sortableSlice.actions;

export default sortableSlice.reducer;