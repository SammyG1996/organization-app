import './Todo.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';



function Todo({data, id, handleDeleteTodos}){

    const handleDelete = (e) => {
        handleDeleteTodos(id);
    }

    return (
        <div className='todo flex content-center'>
                <IconButton sx={{width: 40, height: 40}} aria-label="delete" size="small" onClick={handleDelete}> <DeleteIcon /> </IconButton>
                <p>{data}</p> 
        </div>
    )
}

export default Todo