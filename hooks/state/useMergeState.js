

export default function useMergeState({initialState = {}, fns = {}, hooks = {}}) {
    
    const store = Object.keys(hooks).reduce((acc, hookName) => {
        const [state, handler, isChecked ] = hooks[hookName]?.(initialState[hookName], fns[hookName])
        acc.states[hookName] = state
        acc.handlers[hookName] = handler
        acc.isChecked[hookName] = isChecked
        return acc
    }, {states : {}, handlers : {}, isChecked : {}})

    const mergeHandler = key => {
        return store.handlers[key]
    }
    const states = store.states
    const isChecked = store.isChecked
    // const state = store.reduce((acc, cur) => acc[], {})
  return [states, mergeHandler, isChecked]
}
