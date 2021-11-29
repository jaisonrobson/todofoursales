import { ACTIONS } from ".";

export function todoadd(dispatch, todo) {
    dispatch({ type: ACTIONS.TODO_ADD, payload: { todo } })
}

export function todoedit(dispatch, todo) {
    dispatch({ type: ACTIONS.TODO_EDIT, payload: { todo } })
}

export function tododelete(dispatch, todo) {
    dispatch({ type: ACTIONS.TODO_DELETE, payload: { todo } })
}

export function todotoggle(dispatch, todo) {
    dispatch({ type: ACTIONS.TODO_TOGGLE, payload: { todo } })
}