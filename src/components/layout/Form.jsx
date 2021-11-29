import React from 'react'
import styled from 'styled-components'

import { Form as ReactstrapForm } from 'reactstrap'

const StyledForm = styled(({ width, height, display, padding, margin, ...props }) => <ReactstrapForm {...props} />)`
${({ width }) => width ? `width: ${width};` : ''}
${({ height }) => height ? `height: ${height};` : ''}
${({ display }) => display ? `display: ${display};` : ''}
${({ padding }) => padding ? `padding: ${padding};` : ''}
${({ margin }) => margin ? `margin: ${margin};` : ''}
`

const Form = (props) => <StyledForm {...props} />

export default Form
