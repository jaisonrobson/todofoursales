import './Categories.css'
import React from 'react'
import _ from 'lodash'

import { CATEGORIES } from 'util/constants'
import Button from 'components/layout/Button'

const Categories = () => {
    return (
        <div id="categories">
            {
                _.map(
                    _.toArray(CATEGORIES),
                    (category) =>
                        <Button
                            block
                            key={category}
                            size="lg"
                            textDecoration="none"
                            textColor="black"
                            buttonColor="transparent"
                            hoverColor="#a3b9cf"
                            activeColor="#778899"
                        >
                            {category}
                        </Button>,
                )
            }
        </div>
    )
}

export default Categories
