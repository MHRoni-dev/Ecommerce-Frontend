'use client'

import CartItem from '@/components/cart/CartItem'
import CartItemContainer from '@/components/cart/CartItemContainer'
import React from 'react'
import { useSelector } from 'react-redux'

export default function CartProducts() {
  const cart = useSelector(state => state.cart.cart)
  return (
    <CartItemContainer >
      {cart.map((product, i)=>(
        <CartItem key={i} details={product}/>
      ))}
    </CartItemContainer>
  )
}
