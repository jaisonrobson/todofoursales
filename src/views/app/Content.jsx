import React from 'react'

import Categories from 'views/todo/Categories'
import Activities from 'views/todo/Activities'

const Content = () => (
    <div id="main-container">
        <aside className="sidebar">
            <Categories />
        </aside>

        <main className="content">
            <Activities />
        </main>
    </div>
)

export default Content
