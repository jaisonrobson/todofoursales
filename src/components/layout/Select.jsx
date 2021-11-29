import React from 'react'
import styled from 'styled-components'

import { Input as ReactstrapInput } from 'reactstrap'

const StyledInput = styled(({ width, height, display, padding, margin, ...props }) => <ReactstrapInput {...props} />)`
${({ width }) => width ? `width: ${width};` : ''}
${({ height }) => height ? `height: ${height};` : ''}
${({ display }) => display ? `display: ${display};` : ''}
${({ padding }) => padding ? `padding: ${padding};` : ''}
${({ margin }) => margin ? `margin: ${margin};` : ''}
`

const Select = (props) => <StyledInput type="select" {...props} />

export default Select
