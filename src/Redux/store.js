import { configureStore } from "@reduxjs/toolkit";
import CartSystem from "./TodoSlice"
const store=configureStore({

    reducer:{
        mycart:CartSystem
    }

})


export default store