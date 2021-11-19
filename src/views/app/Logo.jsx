import React from 'react'

import Container from 'components/layout/Container'
import Row from 'components/layout/Row'
import Col from 'components/layout/Col'

const Logo = () => {
    return (
        <Container fluid style={{ display: 'flex', justifyContent: 'center' }}>
            <Row>
                <Col>
                    FourSales To Do List
                </Col>
            </Row>
        </Container>
    )
}

export default Logo
