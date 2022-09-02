import React, {useState} from 'react';
import './App.css';
import setTasks from './setTasks';

function App() {
  const [tasks, setTasks] = useState()[
    {
      id: '1',
      title: 'Estudar Programação',
      description: 'estudar React',
      completed: false,
    } 
  ]
  return (
    <>
      <div className='container'>
        {tasks}
        <button onClick={setTasks()}>Criar tarefa</button>
      </div>
    </>
  );
}

export default App;
