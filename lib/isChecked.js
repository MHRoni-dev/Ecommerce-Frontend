export const singleSelect = (value, state = null) =>  value === state

export function multiSelect  (value, state = []) { return state.includes(value) }

export const hasProperty = (value, state = {}) => !!state[value]