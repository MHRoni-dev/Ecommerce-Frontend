import React from 'react'

export default function useMultiActiveState(init = [], fn = (e) => e.target.value) {

    const [activeState, setActiveState] = React.useState(init)

    const handleState = (e) => {
        //check if state is active
        if(activeState.includes(fn(e))){
            //remove from active
            setActiveState(activeState.filter(state => state !== fn(e)))
        }else{
            //set as active
            setActiveState([...activeState, fn(e)])
        }
    }

    const isActive = (state) => activeState.includes(state)
    const returnThisFunction = () => [activeState, handleState, isActive, returnThisFunction]

  return [activeState, handleState, isActive, returnThisFunction]
}
