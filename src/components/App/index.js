import React from 'react'
import Sample from '../Sample'

const App = ({ params }) => (
    <div>
        <Sample filter={params.filter}/>
    </div>
)

export default App
