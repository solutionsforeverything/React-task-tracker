
const Tasks = ({tasks}) => {
   
    return (
        <>
            {
                tasks.map((task)=>(
                    <Task></Task>
                ))
            }
        </>
    )
}

export default Tasks
