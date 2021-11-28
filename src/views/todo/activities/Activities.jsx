import React from 'react'

import { withReducerContextConsumer } from 'contexts/withReducerContext'

const Activities = ({ reducer }) => {
    console.log(`reducer`, reducer)
    return (
        <div style={{ margin: 'auto' }}>
            Activities
        </div>
    )
}

export default withReducerContextConsumer(Activities)
