import {useState} from 'react';
const Tasks = () => {
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
            text:'Doctors Appointment',
            day:'Feb 5th at 2:30pm',
            reminder:true, 
         },

    ]);
    return (
        <div>
            
        </div>
    )
}

export default Tasks
