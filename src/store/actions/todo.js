import { ACTIONS } from ".";

export function todoadd(dispatch, todo) {
    dispatch({ type: ACTIONS.TODO_ADD, payload: { todo } })
}

export function todoedit(dispatch, todo) {
    dispatch({ type: ACTIONS.TODO_EDIT, payload: { todo } })
}

export function tododelete(dispatch, id) {
    dispatch({ type: ACTIONS.TODO_DELETE, payload: { id } })
}

export function todotoggle(dispatch, id) {
    dispatch({ type: ACTIONS.TODO_TOGGLE, payload: { id } })
}