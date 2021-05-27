import React from 'react'
import data from './data.json'

function Input() {

  return (
    <div>
      <div className="input">
        <input placeholder={data.placeholder}></input>
      </div>
      <div className="button">
        <button>{data.button}</button>
      </div>
    </div>
  )
}

export default Input
