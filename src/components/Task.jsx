import React from 'react'
import './Task.css'
const  Task= ({task}) => {
    return (
        <div className='task-container'>
            <h3>{task.title}</h3>        
        </div>
    );
}
export default Task