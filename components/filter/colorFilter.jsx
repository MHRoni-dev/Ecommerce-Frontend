import React from 'react'
import { FilterTitle } from '../ui/title'
import ColorSelect from '../product/productDetail/ColorSelect'

export default function ColorFilter() {
  return (
    <div>
        <FilterTitle>Color</FilterTitle>
        <ColorSelect />
    </div>
  )
}
