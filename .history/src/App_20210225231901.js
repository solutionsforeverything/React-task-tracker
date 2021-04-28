import React from 'react';
import {useState} from 'react';
import AddTask from './Components/AddTask';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
function App() {

  const [tasks,setTasks]=useState([
    {
       id:1,
       text:'Doctors Appointment',
       day:'Feb 5th at 2:30pm',
       reminder:true, 
    },
    {
        id:2,
        text:'Meeting at school',
        day:'Feb 6th at 1:30pm',
        reminder:true, 
     },
     {
        id:3,
        text:'Food Shopping',
        day:'Feb 5th at 2:30pm',
        reminder:false, 
     },
]);

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

  setTasks



}
  return (
    <div className="container">
      <Header title='Task Tracker'/>
      <AddTask onAdd={addTask}/>
       {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/>:"No Tasks to Show"}
    </div>
  );
}

export default App;
