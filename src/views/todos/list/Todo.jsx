import React from 'react'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import Button from 'components/layout/Button'
import Icon from 'components/layout/Icon'

const RemoveTodoButton = (props) => (
    <Button
        textColor="indianred"
        buttonColor="transparent"
        hoverColor="indianred"
        activeColor="#6e1f1f"
    >
        <Icon icon={faTrashAlt} />
    </Button>
)

const EditTodoButton = (props) => (
    <Button
        textColor="#ddc69b"
        buttonColor="transparent"
        hoverColor="#ddc69b"
        activeColor="#856d42"
    >
        <Icon icon={faPencilAlt} />
    </Button>
)

const Todo = ({ id, name, category, description, completed }) => (
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
                <input className="tablecell-checkbox" type="checkbox" value={completed} />
            </div>
        </td>
        <td>
            <div className="tablecell-container">
                <EditTodoButton />
            </div>
        </td>
        <td>
            <div className="tablecell-container">
                <RemoveTodoButton />
            </div>
        </td>
    </tr>
)

export default Todo
