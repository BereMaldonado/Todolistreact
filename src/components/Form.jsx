import React from 'react'

const Form = ({handleChange, addTask, tarea}) => {
  return (
    <div>
        <form onSubmit={addTask}>
            <input type="text" value={tarea} placeholder='Ingresa la tarea' onChange={handleChange}/>
            <button type="submit">Agregar</button>
        </form>
    </div>
  )
}

export {Form}