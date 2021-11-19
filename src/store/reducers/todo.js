import _ from 'lodash'

import { ACTIONS } from './../actions'

export function todosReducer(state, action) {
    switch (action.type) {
        case ACTIONS.TODO_ADD:
            return { ...state, todos: [...state.todos, action.payload.todo] }

        case ACTIONS.TODO_DELETE:
            return { ...state, todos: _.remove(state.todos, todo => todo.id === action.payload.todo.id) }

        case ACTIONS.TODO_TOGGLE:
            return { ...state, todos: _.map(state.todos, todo => todo.id === action.payload.todo.id ? { ...todo, complete: !todo.complete } : todo) }

        default:
            return state
    }
}