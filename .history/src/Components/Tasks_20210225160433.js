
const Tasks = ({tasks}) => {
   
    return (
        <>
            {
                tasks.map((task)=>(
                    <Task key={task.id} task></Task>
                ))
            }
        </>
    )
}

export default Tasks
