import React from 'react'

import { withReducerContextConsumer } from 'contexts/withReducerContext'

const List = ({ reducer }) => {
    console.log(`reducer`, reducer)
    return (
        <div>
            List
        </div>
    )
}

export default withReducerContextConsumer(List)
