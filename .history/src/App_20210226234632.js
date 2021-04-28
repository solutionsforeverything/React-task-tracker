import React from 'react';
import {useState, useEffect} from 'react';
import AddTask from './Components/AddTask';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Tasks from './Components/Tasks';
import About from './Components/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  const[ShowAddTask,setShowAddTask]=useState(false);
  const [tasks,setTasks]=useState([])
    
  //Fetch data from json server
useEffect(() => {
    const getTasks=async() =>{
      const data=await fetchTasks('http://localhost:5000/tasks');
      setTasks(data);
    }
    getTasks();
}, []);

//Fetch task
const fetchTasks=async(url)=>{
  const res=await fetch(url);
  const data=await res.json();

  return data;
}
//Delete Task from UI and json server
const deleteTask=async(id)=>{
  await fetch('http://localhost:5000/tasks/'+id,{
    method:'DELETE',
  })
  
  setTasks(tasks.filter((task)=>task.id!==id));
}

const toggleRemainder=async(id)=>{
 
  const taskToToggle = await fetchTasks('http://localhost:5000/tasks/'+id)
  const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

  const res = await fetch('http://localhost:5000/tasks/'+id, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updTask),
  })

  const data = await res.json()

  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, reminder: data.reminder } : task
    )
  )
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
    <Router>
    <div className="container">
      
      <Route exact path="/">
      <Header title='Task Tracker' onAdd={()=>setShowAddTask(!ShowAddTask)} showAdd={ShowAddTask}/>
      
      {ShowAddTask&&<AddTask onAdd={addTask}/> }

      {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/> :
      "No Task to Show"}
      </Route>
      <Route path='/about>
      </Route>
      <Footer />
    
    </div>
    </Router>

  );
}

export default App;
