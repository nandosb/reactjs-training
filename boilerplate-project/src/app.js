import React from 'react'
import ReactDom from 'react-dom'
import AppRouter from './general/routers/AppRouter'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const jsx = (
    <AppRouter />
)

ReactDom.render(jsx, document.getElementById('app'))
