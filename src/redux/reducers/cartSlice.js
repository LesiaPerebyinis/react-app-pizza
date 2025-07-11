import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0
  
}
const getAmount = (item) => item.price * item.number;
const getTotalCount = (arr) => {
  if (arr) {
    return (Object.values(arr)
      .map((value) => value.number))
      .reduce((a, b) => a + b, 0);
  }
}
const getTotalPrice = (arr) => {
  if (arr) {
    return Object.values(arr)
      .map((value) => value.amount)
      .reduce((a, b) => a + b, 0);
  }
};
const cartSlice = createSlice ({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
    const curItem = state.items.find((item) => item.id === action.payload.id) 
     if (!curItem) {
      state.items.push({
        ...action.payload,
        amount: getAmount(action.payload),
      });

     } else {

      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              number: item.number + action.payload.number,
              amount: item.amount + getAmount(action.payload),
            }
          : item
      );
     }
     state.totalCount = getTotalCount(state.items);
     state.totalPrice = getTotalPrice(state.items);
    
    },
    deleteFromCart(state, action) {
     state.items = state.items.filter(item => item.id !== action.payload);
    
     state.totalCount = getTotalCount(state.items);
     state.totalPrice = getTotalPrice(state.items);
      },

    addNumberInCart(state, action) {
      const currentItem = state.items.find(item => item.id === action.payload )
      currentItem.number = currentItem.number +1;
      currentItem.amount = getAmount(currentItem);
      state.totalCount = getTotalCount(state.items);
      state.totalPrice = getTotalPrice(state.items);
    },
    deductNumberInCart(state, action) {
      const currentItem = state.items.find((item) => item.id === action.payload);
      if (currentItem.number <= 1) return;
        currentItem.number = currentItem.number - 1;
        currentItem.amount = getAmount(currentItem);
        state.totalCount = getTotalCount(state.items);
        state.totalPrice = getTotalPrice(state.items);
     }
    }
  
})

export const { addToCart, deleteFromCart, addNumberInCart, deductNumberInCart } =
  cartSlice.actions;
export default cartSlice.reducer;
