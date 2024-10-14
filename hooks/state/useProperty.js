import React from 'react'

export default function useProperty(init = {}, fn = e => [e.target.name, e.target.value]) {

    let state = init
    const manageState = (e) => {
        const [key, value] = fn(e)
        state = {...state, [key] : value}
    }
    const has = state => !!state

    const self = [state, manageState, has, self]

    return [state, manageState, has, self]

}
