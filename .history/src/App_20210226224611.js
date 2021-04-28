import React from 'react';
import {useState, useEffect} from 'react';
import AddTask from './Components/AddTask';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
function App() {
  const[ShowAddTask,setShowAddTask]=useState(false);
  const [tasks,setTasks]=useState([])
    
  //Fetch data from json server
useEffect(() => {
    
    fetchTasks();
}, []);

//Delete Task from UI and json server
const deleteTask=async(id)=>{
  await fetch('http://localhost:5000/tasks/'+id,{
    method:'DELETE',
  })
  
  setTasks(tasks.filter((task)=>task.id!==id));
}

const toggleRemainder=async(id)=>{
 
  const res=await fetch('http://localhost:5000/tasks/'+id)
  //setTasks(tasks.map((task)=>task.id===id?
  //{...task,reminder:!task.reminder} : task))
}
//Add Task
const addTask = async(task)=>
{
  const res=await fetch('http://localhost:5000/tasks',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(task)
  })

  const data=await res.json();
  
  setTasks([...tasks,data])

  // const id=Math.floor(Math.random()*10000)+1;
  // const newTask={id,...task}
  // setTasks([...tasks,newTask]);
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
