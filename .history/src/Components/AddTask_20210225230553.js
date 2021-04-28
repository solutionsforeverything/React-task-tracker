import {useState} from 'react';
const AddTask = (onAdd) => {
    const[text, setText]=useState('')
    const[day, setDay]=useState('')
    const[reminder, setReminder]=useState(false)
    
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text"
                required 
                placeholder="Add Task"
                value={text}
                onChange={setText((e)=>e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" 
                required
                placeholder="Add Day & Time"
                value={day}
                onChange={setDay((e)=>e.target.value)}/>
            </div>

            <div className="form-control form-control-check">
                <label>Set Remainder</label>
                <input type="checkbox"
                value={reminder}
                onChange={setReminder((e)=>e.currentTarget.checked)}/>
            </div>

            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
