import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  value: [],
};

const CartSlice = createSlice({
  name: "CartStore",
  initialState: initialState,
  reducers: {
    AddCart: (state, action) => {
      const Product = { ...action.payload, count: 1 };
      if (state.value.length) {
        const Result = state.value.find(
          (data) => action.payload.id === data.id
        );
        if (Result) {
          toast.warning("Already Added");
        } else {
          state.value.unshift(Product);
          toast.success("Add Successfully");
        }
      } else {
        state.value.push(Product);
        toast.success("Add Successfully");
      }
    },

    RemoveCart: (state, action) => {
      let ProductIndex = null;
      state.value.find((data, index) => {
        if (action.payload.id == data.id) {
          ProductIndex = index;
        }
      });
      state.value.splice(ProductIndex, 1);
      toast.error("Product Removed");
    },

    ProductCountAdd: (state, action) => {
      state.value.find((data) => {
        if (action.payload.id === data.id) {
          data.count++;
        }
      });
    },
    ProductCountDel: (state, action) => {
      state.value.find((data) => {
        if (action.payload.id === data.id) {
          data.count--;
        }
      });
    },
    ClearCart: (state, action) => {
      state.value = [];
    },
  },
});

export const {
  AddCart,
  RemoveCart,
  ClearCart,
  ProductCountAdd,
  ProductCountDel,
} = CartSlice.actions;
export default CartSlice.reducer;
