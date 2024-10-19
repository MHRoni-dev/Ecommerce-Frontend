import { useState } from "react";

export default function useCount(value, min, max) {
  const [count, setCount] = useState(value)

  const increase = (value = 1) => () => setCount(pre => pre + value <= max ? pre + value : max)
  const decrease = (value = 1) => () => setCount(pre => pre - value >= min ? pre - value : min)
  const handleCount = e  => setCount(pre => (e.target.value <= max && e.target.value >= min) ? e.target.value : pre)
  
  return [count, {increase, decrease, handleCount, setCount}] 

}
