import React from 'react'
import _ from 'lodash'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import Icon from 'components/layout/Icon'
import TodoModalButton from 'components/custom/todos/TodoModalButton'
import RemoveTodoModalButton from 'components/custom/todos/RemoveTodoModalButton'
import { ACTIONS, todotoggle } from 'store/actions'
import { withReducerContextConsumer } from 'contexts/withReducerContext'

const RemoveTodoButton = ({ id, name }) => (
    <RemoveTodoModalButton
        textColor="indianred"
        buttonColor="transparent"
        hoverColor="indianred"
        activeColor="#6e1f1f"
        buttonChildren={<Icon icon={faTrashAlt} />}
        id={id}
        name={name}
    />
)

const EditTodoButton = ({ reducer, id }) => {
    const todo = _.find(reducer.todos, (element) => element.id === id)

    return (
        <TodoModalButton
            textColor="#ddc69b"
            buttonColor="transparent"
            hoverColor="#ddc69b"
            activeColor="#856d42"
            headerText="Alterar Tarefa"
            buttonChildren={<Icon icon={faPencilAlt} />}
            action={ACTIONS.TODO_EDIT}
            {...todo}
        />
    )
}

const Todo = ({ reducer, id, name, category, description, completed }) => (
    <tr>
        <td>
            {name}
        </td>
        <td>
            {category}
        </td>
        <td>
            {description}
        </td>
        <td>
            <div className="tablecell-container">
                <input className="tablecell-checkbox" type="checkbox" checked={completed} onChange={() => todotoggle(reducer.dispatch, id)} />
            </div>
        </td>
        <td>
            <div className="tablecell-container">
                <EditTodoButton id={id} reducer={reducer} />
            </div>
        </td>
        <td>
            <div className="tablecell-container">
                <RemoveTodoButton id={id} name={name} />
            </div>
        </td>
    </tr>
)

export default withReducerContextConsumer(Todo)
