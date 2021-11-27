import './App.css'
import React from 'react'

import Header from './Header'
import Content from './Content'

import { withReducerContextProvider } from 'contexts/withReducerContext'

const App = () => {
    return (
        <div id="pagecorpse">
            <Header />

            <Content />
        </div>
    )
}

export default withReducerContextProvider(App)
