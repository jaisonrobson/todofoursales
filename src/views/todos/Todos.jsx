import React, { Fragment, useState } from 'react'

import Categories from 'views/todos/sidebar/Categories'
import Activities from 'views/todos/list/Activities'
import { CATEGORIES } from 'util/constants'

const Todos = () => {
    // eslint-disable-next-line no-unused-vars
    const [listedCategory, setListedCategory] = useState(CATEGORIES.WORK)

    const updateCategory = (newCategory) => (
        setListedCategory(
            (prevState) => prevState !== newCategory
                ? newCategory
                : prevState
        )
    )

    return (
        <Fragment>
            <aside className="sidebar">
                <Categories listedCategory={listedCategory} updateCategory={updateCategory} />
            </aside>

            <main className="content">
                <Activities listedCategory={listedCategory} />
            </main>
        </Fragment>
    )
}

export default Todos
