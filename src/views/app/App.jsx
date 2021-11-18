import React, { Fragment } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import List from 'views/todo/list/List'
import Sidebar from 'views/todo/sidebar/Sidebar'

const StyledApp = styled.div`
    width: 100vw;
    height: 100vh;
`

const App = () => {
    return (
        <StyledApp>
            <Logo />
            <Sidebar />
            <List />
        </StyledApp>
    )
}

export default App
