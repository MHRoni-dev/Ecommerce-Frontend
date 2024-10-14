import React from 'react'

export default function usePropertyState(init = {}, fn = e => [e.target.name, e.target.value]) {
    const [state, setState] = React.useState(init)
    const manageState = (e) => {
        const [key, value] = fn(e)
        setState({...state, [key] : value})
    }
    const has = prop => !!state[prop]

    const self = [state, manageState, has, usePropertyState]

  return [state, manageState, has, self]
}
