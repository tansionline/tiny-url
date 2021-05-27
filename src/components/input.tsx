import React from 'react'
import data from './data.json'

function Input() {

  return (
   <>
   <p>{data.form}</p>
   <input placeholder={data.placeholder}></input>
   </>
  )
}

export default Input
