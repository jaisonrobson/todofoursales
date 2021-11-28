import './Activities.css'
import React from 'react'

import { withReducerContextConsumer } from 'contexts/withReducerContext'

const Activities = ({ reducer }) => {
    console.log(`reducer`, reducer)
    return (
        <div id="activities">
            Activities
        </div>
    )
}

export default withReducerContextConsumer(Activities)
