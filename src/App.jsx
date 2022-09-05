import React, {useState} from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Range from './components/Range';

function App() {
  const [tasks, setTasks] = useState([
    {
      title: "Bom dia"
    },
    {
      title: "Boa tarde"
    },
    {
      title: "Boa noite"
    },
    {
      title: "Boa madrugada"
    }
  ])
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle     
    }];
    setTasks(newTasks);
  }
  return (
    //O <Tasks /> vai renderizar o Task.js com uma propriedade chamada tasks que carrega as informações do vetor Tasks
    <>
      <div className='container'> 
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks}/>
      <Range/>
      </div>
    </>
  );
}

export default App;
