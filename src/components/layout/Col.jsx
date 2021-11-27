import React from 'react'
import styled from 'styled-components'

import { Col as ReactstrapCol } from 'reactstrap'

const StyledReactstrapCol = styled(({ width, height, display, padding, margin, ...props }) => <ReactstrapCol {...props} />)`
${({ width }) => width ? `width: ${width};` : ''}
${({ height }) => height ? `height: ${height};` : ''}
${({ display }) => display ? `display: ${display};` : ''}
${({ padding }) => padding ? `padding: ${padding};` : ''}
${({ margin }) => margin ? `margin: ${margin};` : ''}
`

const Col = (props) => <StyledReactstrapCol {...props} />

export default Col
