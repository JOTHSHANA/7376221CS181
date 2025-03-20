import React from 'react'
import Layout from '../components/appLayout/Layout';
function Dashboard() {
    return (
        <Layout body={<Body />} />
    )
}

function Body() {
    return (
        <div>
            Hello Dashboard
        </div>
    )
}

export default Dashboard
