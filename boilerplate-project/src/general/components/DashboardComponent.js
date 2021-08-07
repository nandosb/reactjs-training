import React from 'react'

import { Link } from 'react-router-dom'

const DashboardComponent = () => (
    <div>
        <div>General Dashboard Component</div>
        <div><Link to="/module1">Module1</Link></div>
        <div><Link to="/module1/subdir">Module1 Subdir</Link></div>
    </div>
)

export default DashboardComponent
