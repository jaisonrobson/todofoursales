import React from 'react'
import styled from 'styled-components'

import { Container as ReactstrapContainer } from 'reactstrap'

const StyledContainer = styled(({ width, height, display, padding, margin, ...props }) => <ReactstrapContainer {...props} />)`
${({ width }) => width ? `width: ${width};` : ''}
${({ height }) => height ? `height: ${height};` : ''}
${({ display }) => display ? `display: ${display};` : ''}
${({ padding }) => padding ? `padding: ${padding};` : ''}
${({ margin }) => margin ? `margin: ${margin};` : ''}
`

const Container = (props) => <StyledContainer {...props} />

export default Container
