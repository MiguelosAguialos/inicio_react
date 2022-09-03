import React from "react";
import Task from './Task'
const Tasks = ({tasks}) => {
    // {tasks} é o nome da prop que está carregando os valores de Tasks.
    // Ele então está fazendo um mapeamento para que cada task renderize a <Task /> com as props das tasks anteriores
    // Já que ele está carregando as informações, basta selecionar qual informação mostrar e ele irá mostrar em cada posição do vetor 
    return(
        <>
        {tasks.map((task) => (<Task  task={task}/>))}
        </>
    )
}

export default Tasks