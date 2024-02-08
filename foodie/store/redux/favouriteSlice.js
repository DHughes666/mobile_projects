import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: 'favourites',
    initialState: {
        ids: [],
    },

    reducers: {
        addFavourite: (state, {payload}) => {
            state.ids.push(payload.id); 
        },
        removeFavourite: (state, {payload}) => {
            state.ids.splice(state.ids.indexOf(payload), 1);
        }
    }
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;