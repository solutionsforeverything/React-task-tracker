//import Task from "./Task";
const Tasks = ({tasks}) => {
   
    return (
        <>
            {
                tasks.map((task)=>(
                    //<Task key={task.id} task={task} />
                    <div className="task">
                        
                    </div>
                ))
            }
        </>
    )
}

export default Tasks
