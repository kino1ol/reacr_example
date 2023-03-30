import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
        add: (state, action) => {
            let isIncludes
            const newCart = state.value.map((product) => {
                if (product.id === action.payload.id) {
                    isIncludes = true
                    product = {
                        ...product,
                        count: product.count + action.payload.count
                    }
                }
                return product
            });
            if (isIncludes) {
                state.value = newCart
            } else {
                state.value = [
                    ...state.value,
                    action.payload
                ]
            }
        }
    }
})

export const { add } = cartSlice.actions

export default cartSlice.reducer