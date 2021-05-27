import React from 'react'
import './App.css'
import data from './data/page.json'
import Input from './components/input'

function App() {

  return (
    <div>
        <div className="header">
          <h1>{data.header}</h1>
        </div>
        <div className="form">
          <Input />
        </div>
    </div>
  )
}

export default App
