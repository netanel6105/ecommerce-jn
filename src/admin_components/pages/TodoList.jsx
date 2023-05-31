import React, { useContext } from 'react'
import { MyContext } from '../../context/myContext'

const ToDolist = () => {
  const {product_ar}= useContext(MyContext)
  return (
    <div>
      
      <h2>ToDolist</h2>
      {product_ar.map((itemVal,i)=>{
        return(
          <h3 key={i}>{itemVal}</h3>
        )
      })}
      </div>
  )
}

export default ToDolist