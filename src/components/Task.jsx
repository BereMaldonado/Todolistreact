import React, {useState} from 'react'
import '../Task.css'

const Task = ({tarea, borrarTarea}) => {
    const[completada,setCompletada] = useState(false)
    
    return (
        <div className={completada?'containerTarea containerTareaCompletada':'containerTarea'}>
            <h1 className={completada?'completada':'noCompletada'}>{tarea.tarea}</h1>
            <button id='completar' onClick={()=>setCompletada(!completada)}>{completada?'No completada':'Completada'}</button>
            <button onClick={()=>borrarTarea(tarea.id)} id='eliminar'>Eliminar</button>
        </div>
    )
}

export {Task}