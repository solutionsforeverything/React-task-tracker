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
const deleteTask=(id)=>{
  console.log('Delete task '+id);
}

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      <Tasks tasks={tasks} onDelete={deleteTas}/>
    </div>
  );
}

export default App;
