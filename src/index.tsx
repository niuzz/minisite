import * as React from 'react'
import * as ReactDom from 'react-dom'
import * as styles from './sass/index.scss' // ts 找不到，需要加typing
import RHeader from '@components/Header'
import { Router } from 'react-router-dom'
import { createHashHistory } from 'history'

import AppRouter from '@shared/App'

// import Test from '@components/Test'
const hashHistory = createHashHistory()

const render = (Component: React.ComponentType) => {
    const element = (

            <Router history={hashHistory}>
                <Component />
            </Router>

    )
    ReactDom.render(element, document.getElementById('app') as HTMLElement)
}

render(AppRouter)