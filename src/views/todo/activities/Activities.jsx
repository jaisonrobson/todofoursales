import './Activities.css'
import React from 'react'

import Table from 'components/layout/Table'
import Button from 'components/layout/Button'

import { withReducerContextConsumer } from 'contexts/withReducerContext'

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
            <th>
            </th>
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
                    <button>X</button>
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
                    <button>X</button>
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
                    <button>X</button>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div className="tablecell-container">
                    <Button
                        color="primary"
                    >
                        +
                    </Button>
                </div>
            </td>
            <td>
                -
            </td>
            <td>
                -
            </td>
            <td>
                -
            </td>
            <td>
                -
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
