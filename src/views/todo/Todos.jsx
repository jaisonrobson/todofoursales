import React, { Fragment } from 'react'

import Categories from 'views/todo/categories/Categories'
import Activities from 'views/todo/activities/Activities'

const Todos = () => {
    return (
        <Fragment>
            <aside className="sidebar">
                <Categories />
            </aside>

            <main className="content">
                <Activities />
            </main>
        </Fragment>
    )
}

export default Todos
