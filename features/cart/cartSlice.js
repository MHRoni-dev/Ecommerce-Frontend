import { useSelector } from 'react-redux';

const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    details: {
      total: 0,
      subTotal: 0,
      vat: 0,
      discount: 0
    },
  },
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.cart.findIndex(item => item.id === action.payload.id)
      if (productIndex >= 0) {
        state.cart[productIndex].count++
      }
      else{
        action.payload.count = 1
        state.cart = [...state.cart, action.payload]
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload)
    },
    increaseCount: (state, action) => {
      const cartItem = state.cart.find(item => item.id === action.payload)
      if(cartItem.count < 100){
        cartItem.count++
      }
    },
    decreaseCount: (state, action) => {
      const cartItem = state.cart.find(item => item.id === action.payload)
      if(cartItem.count > 1){
        cartItem.count--
      }
    },
    setCount: (state, action) => {
      const cartItem = state.cart.find(item => item.id === action.payload.id)
      cartItem.count = action.payload.count
    },
    clearCart: (state, action) => {
      state.cart = []
    },
    updateDetails: (state, action) => {
      state.details = action.payload
    }

  }
})

export const useGetCartCount = () => useSelector(state => state.cart.cart.length)
export const useGetCartProductAndCount = () => {
  const cart = useSelector(state => state.cart.cart)
  const productAndCount = {}
  cart.forEach(product => {
    productAndCount[product.id] = product.count
  });
  return productAndCount
}

export const { addToCart, removeFromCart, increaseCount, decreaseCount, setCount, clearCart, updateDetails } = cartSlice.actions
export default cartSlice.reducer