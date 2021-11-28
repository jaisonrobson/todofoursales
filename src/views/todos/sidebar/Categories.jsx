import './Categories.css'
import React from 'react'
import _ from 'lodash'

import { CATEGORIES } from 'util/constants'
import Button from 'components/layout/Button'

const Categories = ({ listedCategory, updateCategory }) => (
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
                        onClick={() => updateCategory(category)}
                        active={category === listedCategory}
                    >
                        {category}
                    </Button>,
            )
        }
    </div>
)

export default Categories
