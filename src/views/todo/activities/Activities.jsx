import './Activities.css'
import React from 'react'

import { Table } from 'reactstrap'

import { withReducerContextConsumer } from 'contexts/withReducerContext'

const Activities = ({ reducer }) => {
    console.log(`reducer`, reducer)
    return (
        <div id="activities">
            <Table
                hover
                responsive
                striped
            >
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
                    </tr>
                </thead>
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
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default withReducerContextConsumer(Activities)
