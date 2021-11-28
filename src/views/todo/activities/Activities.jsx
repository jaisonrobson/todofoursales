import './Activities.css'
import React from 'react'
import _ from 'lodash'
import { faPencilAlt, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import Table from 'components/layout/Table'
import Button from 'components/layout/Button'
import Icon from 'components/layout/Icon'
import { withReducerContextConsumer } from 'contexts/withReducerContext'

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

const TodosList = withReducerContextConsumer(({ reducer }) => {
    console.log(`reducer`, reducer)
    return _.map(reducer.todos, (todo) => <Todo key={todo.id} {...todo} />)
})

const TodosTableHeader = (props) => (
    <thead>
        <tr>
            <th>
                Nome
            </th>
            <th>
                Categoria
            </th>
            <th>
                Descricao
            </th>
            <th>
                Completado
            </th>
            <th colSpan="2" />
        </tr>
    </thead>
)

const TodosTableBody = (props) => (
    <tbody>
        <TodosList />

        <tr>
            <td colSpan="6">
                <div className="tablecell-container">
                    <Button
                        block
                        textColor="black"
                        buttonColor="transparent"
                        hoverColor="#a3b9cf"
                        activeColor="#778899"
                    >
                        <Icon icon={faPlus} />
                    </Button>
                </div>
            </td>
        </tr>
    </tbody>
)

const TodosTable = (props) => (
    <Table>
        <TodosTableHeader />

        <TodosTableBody />
    </Table>
)

const Activities = ({ reducer }) => {
    return (
        <div id="activities">
            <TodosTable />
        </div>
    )
}

export default withReducerContextConsumer(Activities)
