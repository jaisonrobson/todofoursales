import './Activities.css'
import React from 'react'
import _ from 'lodash'

import Table from 'components/layout/Table'
import TodoModalButton from 'components/custom/todos/TodoModalButton'
import { withReducerContextConsumer } from 'contexts/withReducerContext'
import Todo from 'views/todos/list/Todo'

const TodosList = withReducerContextConsumer(({ reducer, listedCategory }) => _.map(
    reducer.todos,
    (todo) => todo.category === listedCategory
        ? <Todo key={todo.id} {...todo} />
        : null,
))

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

const TableLastRow = () => (
    <tr>
        <td colSpan="6">
            <div className="tablecell-container">
                <TodoModalButton
                    headerText="Nova Tarefa"
                />
            </div>
        </td>
    </tr>
)

const TodosTableBody = ({ listedCategory }) => (
    <tbody>
        <TodosList listedCategory={listedCategory} />

        <TableLastRow />
    </tbody>
)

const TodosTable = ({ listedCategory }) => (
    <Table>
        <TodosTableHeader />

        <TodosTableBody listedCategory={listedCategory} />
    </Table>
)

const Activities = ({ listedCategory }) => (
    <div id="activities">
        <TodosTable listedCategory={listedCategory} />
    </div>
)

export default Activities
