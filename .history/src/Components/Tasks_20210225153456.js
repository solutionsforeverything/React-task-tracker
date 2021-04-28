import {useState} from 'react';
const Tasks = () => {
    const [tasks,setTasks]=useState([
        {
           id:1,
           text:'Doctors Appointment',
           day:'Feb 5th at 2:30pm' 
        }
    ]);
    return (
        <div>
            
        </div>
    )
}

export default Tasks
