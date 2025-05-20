import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pets: []
}

const PetsSlice = createSlice({
    name: "pets",
    initialState,
    reducers: {
        initPets: (state, action) => {
            state.pets = action.payload
        },
        addPet: (state, action) => {
            state.pets.push(action.payload)
        },
        delPet: (state, action) => {
            state.pets = state.pets.filter(p => p.id !== action.payload)
        }
    }
})

export const {
    initPets, addPet, delPet
} = PetsSlice.actions;

export default PetsSlice.reducer;