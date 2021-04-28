import React from 'react';
import {useState} from 'react';
import AddTask from './Components/AddTask';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import useFetch from './Components/useFetch'
function App() {
  const[ShowAddTask,setShowAddTask]=useState(false);
  const[tasks,setTasks] = useFetch('http://localhost:5000/tasks');

 

const toggleRemainder=(id)=>{

  setTasks(tasks.map((task)=>task.id===id?
  {...task,reminder:!task.reminder} : task))
}
//Add Task
const addTask=(task)=>
{
  const id=Math.floor(Math.random()*10000)+1;

  const newTask={id,...task}

  setTasks([...tasks,newTask]);
}
  return (
    <div className="container">
      
      <Header title='Task Tracker' onAdd={()=>setShowAddTask(!ShowAddTask)} showAdd={ShowAddTask}/>

      {ShowAddTask && <AddTask onAdd={addTask}/>}

       {tasks ? <Tasks tasks={tasks} onToggle={toggleRemainder}/>:"No Tasks to Show"}
    </div>
  );
}

export default App;
