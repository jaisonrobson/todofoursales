import React, { Fragment } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Todos from 'views/todo/Todos'

import { withReducerContextProvider } from 'contexts/withReducerContext'

const StyledApp = styled.div`
    width: 100vw;
    height: 100vh;
`

const App = () => {
    return (
        <StyledApp>
            <Logo />
            <Todos />
        </StyledApp>
    )
}

export default withReducerContextProvider(App)
