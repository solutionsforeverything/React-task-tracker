import Task from "./Task";
import {useParams} from 'react-router-dom'
const Tasks = ({tasks,onToggle}) => {
   
    return (
        <>
            {
                tasks.map((task)=>(
                    <Task key={task.id} task={task} onToggle={onToggle}/>
                ))
            }
        </>
    )
}

export default Tasks
