import { createSlice } from "@reduxjs/toolkit";



   const CartSystem=createSlice({

        name:"CART",
        initialState:[],
        reducers:{

            addcart(state,action){
                const newItem = action.payload;

                // Check if the item already exists in the cart
                const existingItemIndex = state.findIndex(item => item.id === newItem.id);
            
                if (existingItemIndex !== -1) {
                    // If the item exists, double its quantity or apply your specific logic
                    state[existingItemIndex].quantity *= 2; // Doubling the quantity
                } else {
                    // If the item doesn't exist, add it to the cart
                    state.push(newItem);
                }
            },
            removecart(state,action){

            }

        }

    })

    export const {addcart,removecart} = CartSystem.actions
    export default CartSystem.reducer