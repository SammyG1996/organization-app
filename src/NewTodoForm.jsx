import { useState } from "react"
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import "./NewTodoForm.css";


function NewTodoForm({handleSetTodos}) {

    const [formData, setFormData] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setFormData(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        handleSetTodos(formData);
        setFormData('');

    }

    return(
        <>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="todo"></label>
                <TextField fullWidth size="small" type="text" name="todo" id="todo" placeholder="New Item" value={formData} onChange={handleChange} autoComplete="off" variant="standard" />
                <Fab variant="outlined" type="submit" color="primary" aria-label="add" size="small" ><AddIcon /></Fab>


            </form>
        </>
    )
}

export default NewTodoForm