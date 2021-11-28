import './Activities.css'
import React from 'react'
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
        <tr>
            <td>
                Sujeira na calha
            </td>
            <td>
                Pessoal
            </td>
            <td>
                Remover a sujeira da calha quando tiver tempo livre
            </td>
            <td>
                <div className="tablecell-container">
                    <input className="tablecell-checkbox" type="checkbox" />
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
        <tr>
            <td>
                Sujeira na Piscina
            </td>
            <td>
                Pessoal
            </td>
            <td>
                Remover a sujeira da piscina antes da festa
            </td>
            <td>
                <div className="tablecell-container">
                    <input className="tablecell-checkbox" type="checkbox" />
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
        <tr>
            <td>
                Requisito de Importacao
            </td>
            <td>
                Trabalho
            </td>
            <td>
                Averiguar melhor a necessidade da importacao de arquivos no sistema com o cliente
            </td>
            <td>
                <div className="tablecell-container">
                    <input className="tablecell-checkbox" type="checkbox" />
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
