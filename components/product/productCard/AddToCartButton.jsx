'use client'
import { Button } from '@/components/ui/button'
import { addToCart, useGetCartProductAndCount } from '@/features/cart/cartSlice'
import { useDispatch } from 'react-redux'


export default function AddToCartButton({product}) {
  const productAndCount = useGetCartProductAndCount()
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }
  return (
    <Button  size="sm" className="w-full" onClick={handleAddToCart}>Add to Cart 
    {
      productAndCount[product.id] > 0 && ( <span className='-mt-2 ml-2 bg-highlight w-[18px] h-[18px] rounded-full flex items-center justify-center'>{productAndCount[product.id]}</span>)
    }
    </Button>
  )
}
