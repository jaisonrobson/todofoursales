import React from 'react'
import styled from 'styled-components'

import { Button as ReactstrapButton } from 'reactstrap'

const StyledButton = styled(({ textDecoration, textColor, buttonColor, activeColor, hoverColor, ...props }) => <ReactstrapButton {...props} />)`
    ${({ textDecoration }) => textDecoration ? `text-decoration: ${textDecoration};` : ''}
    ${({ textColor }) => textColor ? `color: ${textColor};` : ''}
    ${({ buttonColor }) => buttonColor ? `background-color: ${buttonColor};` : ''}
    ${({ buttonColor }) => buttonColor ? `border-color: ${buttonColor};` : ''}
    
    :hover {
        ${({ hoverColor }) => hoverColor ? `background-color: ${hoverColor};` : ''}
        ${({ hoverColor }) => hoverColor ? `border-color: ${hoverColor};` : ''}
    }

    :active, :focus {
        ${({ activeColor }) => activeColor ? `background-color: ${activeColor};` : ''}
        ${({ activeColor }) => activeColor ? `border-color: ${activeColor};` : ''}
    }
`

const Button = (props) => <StyledButton {...props} />

export default Button
