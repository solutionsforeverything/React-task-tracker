
const Tasks = ({tasks}) => {
   
    return (
        <>
            {
                tasks.map((task)=>(
                    <Task key={task.id} ></Task>
                ))
            }
        </>
    )
}

export default Tasks
