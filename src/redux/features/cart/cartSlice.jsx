// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     add: (state, action) => {
//       state.items.push(action.payload);
//     },
//     // Reducer to remove an item from the cart
//     removeItem: (state, action) => {
//       // Filter out the item with the specified id from the items array
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//     clearCart: (state, action) => {
//       // Filter out the item with the specified id from the items array
//       state.items = []
//     },
//     initializeCount: (state, action) => {
//         // Assuming `count` is an array of items to initialize the cart with
//         state.items = action.payload;
//       }
//   },
// });

// // Action creators are generated for each case reducer function
// export const { add, removeItem, clearCart,initializeCount} = cartSlice.actions;

// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    initializeCount: (state, action) => {
      // Assuming `count` is an array of items to initialize the cart with
      state.items = []
    }
  },
});

// Action creators are generated for each case reducer function
export const { add, removeItem, clearCart, initializeCount } = cartSlice.actions;

export default cartSlice.reducer;
