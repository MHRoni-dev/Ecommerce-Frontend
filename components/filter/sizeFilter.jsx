import React from 'react'
import { Button } from '../ui/button'
import SizeSelect from '../product/productDetail/SizeSelect'
import { FilterTitle } from '../ui/title'

export default function SizeFilter({state, handler, isChecked}) {
  return (
    <div>
        <FilterTitle>Size</FilterTitle>
        <SizeSelect state={state} handler={handler} isChecked={isChecked} />
    </div>
  )
}
