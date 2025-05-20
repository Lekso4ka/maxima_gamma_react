import { configureStore } from "@reduxjs/toolkit";

import PetsReducer from "./Pets";

export default configureStore({
    reducer: {
        "pets": PetsReducer
    }
})