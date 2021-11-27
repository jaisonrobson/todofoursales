import React from 'react'
import styled from 'styled-components'

import { Row as ReactstrapRow } from 'reactstrap'

const StyledReactstrapRow = styled(({ width, height, display, padding, margin, ...props }) => <ReactstrapRow {...props} />)`
${({ width }) => width ? `width: ${width};` : ''}
${({ height }) => height ? `height: ${height};` : ''}
${({ display }) => display ? `display: ${display};` : ''}
${({ padding }) => padding ? `padding: ${padding};` : ''}
${({ margin }) => margin ? `margin: ${margin};` : ''}
`

const Row = (props) => <StyledReactstrapRow {...props} />

export default Row
