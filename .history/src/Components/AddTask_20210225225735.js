import {useState} from 'react';
const AddTask = () => {
    const[text, setText]=useState('')
    const[day, setDay]=useState('')
    const[reminder, setReminder]=useState(false)
    
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" 
                placeholder="Add Task"
                value={text}
                onChange={setText((e)=>e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" 
                placeholder="Add Day & Time"
                value={day}
                onChange={setDay((e)=>e.target.value)}/>
            </div>

            <div className="form-control form-control-check">
                <label>Set Remainder</label>
                <input type="checkbox"
                onChange={setReminder((e)=>e.curren)}/>
            </div>

            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
