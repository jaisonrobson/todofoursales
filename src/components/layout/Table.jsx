import React from 'react'
import { Table as ReactstrapTable } from 'reactstrap'
import styled from 'styled-components'

const StyledTable = styled(({ height, ...props }) => <ReactstrapTable {...props} />)`
    ${({ height }) => height ? `height: ${height};` : ''}
`

const Table = (props) => (
    <StyledTable
        hover
        responsive
        striped
        height="100%"
        {...props}
    />
)

export default Table
