import React from 'react'

export default function useActiveState(init = null, fn = (e) => e.target.value) {
  const [activeState, setActiveState] = React.useState(init)
  const handleStateChange = (e) => {
    setActiveState(fn(e))
  }
  const isActive = (state) => state === activeState
  return [activeState, handleStateChange, isActive , useActiveState]
}
