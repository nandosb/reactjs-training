import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFoundComponent = () => (
    <div>
        <p>Page not found</p>
        <p>404 - <Link to="/">Go Home</Link></p>
    </div>
)

export default PageNotFoundComponent
