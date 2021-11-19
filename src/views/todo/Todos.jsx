import React from 'react'

import Container from 'components/layout/Container'
import Row from 'components/layout/Row'
import Col from 'components/layout/Col'

import Sidebar from 'views/todo/sidebar/Sidebar'
import List from 'views/todo/list/List'

const Todos = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Sidebar />
                </Col>
                <Col>
                    <List />
                </Col>
            </Row>
        </Container>
    )
}

export default Todos
