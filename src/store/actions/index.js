import { todoadd, tododelete, todotoggle, todoedit } from './todo'

export const ACTIONS = {
    TODO_ADD: 'todo-add',
    TODO_EDIT: 'todo-edit',
    TODO_TOGGLE: 'todo-toggle',
    TODO_DELETE: 'todo-delete',
}

export {
    todoadd,
    todoedit,
    tododelete,
    todotoggle,
}