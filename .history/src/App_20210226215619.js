import React from 'react';
import {useState} from 'react';
import AddTask from './Components/AddTask';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
function App() {
  const[ShowAddTask,setShowAddTask]=useState(false);
  const [tasks,setTasks]=useState([])
    
useEff
//Delete Task
const deleteTask=(id)=>{
  
  setTasks(tasks.filter((task)=>task.id!==id));
}

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
      
      {ShowAddTask&&<AddTask onAdd={addTask}/> }

      {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/> :
      "No Task to Show"}
    </div>
  );
}

export default App;
