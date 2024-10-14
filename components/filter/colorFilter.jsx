import React from 'react'
import { FilterTitle } from '../ui/title'
import ColorSelect from '../product/productDetail/ColorSelect'

export default function ColorFilter({state, handler , isChecked}) {
  return (
    <div>
        <FilterTitle>Color</FilterTitle>
        <ColorSelect  state={state} handler={handler} isChecked={isChecked}/>
    </div>
  )
}
