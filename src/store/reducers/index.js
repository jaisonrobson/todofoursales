import { todosReducer } from './todo'

export function reducer(state, action) {
    let resultState = todosReducer(state, action)

    return resultState
}