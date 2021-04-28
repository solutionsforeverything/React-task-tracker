import React from 'react';
import {useState} from 'react';
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
  
}

  return (
    <div className="container">
      <Header title='Task Tracker'/>
       {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask}/>:"No Tasks to Show"}
    </div>
  );
}

export default App;
