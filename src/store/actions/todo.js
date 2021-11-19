import { ACTIONS } from ".";

export function todoadd(dispatch, todo) {
    dispatch({ type: ACTIONS.TODO_ADD, payload: { todo } })
}