//import Task from "./Task";
const Tasks = ({tasks}) => {
   
    return (
        <>
            {
                tasks.map((task)=>(
                    //<Task key={task.id} task={task} />
                    <div className="task">
                        <h3>{task.text}</h3>
                    </div>
                ))
            }
        </>
    )
}

export default Tasks
