import React, { useState } from 'react'
import styled from 'styled-components'

import { Input as ReactstrapInput } from 'reactstrap'

const StyledInput = styled(({ width, height, display, padding, margin, ...props }) => <ReactstrapInput {...props} />)`
${({ width }) => width ? `width: ${width};` : ''}
${({ height }) => height ? `height: ${height};` : ''}
${({ display }) => display ? `display: ${display};` : ''}
${({ padding }) => padding ? `padding: ${padding};` : ''}
${({ margin }) => margin ? `margin: ${margin};` : ''}
`

const Input = ({ initialValue = "", ...props }) => {
    const [value, setValue] = useState(initialValue)
    const updateValue = (event) => setValue(prevState => prevState !== event.target.value ? event.target.value : prevState)

    return <StyledInput value={value} onChange={updateValue} {...props} />
}

export default Input
