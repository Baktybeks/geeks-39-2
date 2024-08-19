import React, { useState } from 'react';
import classes from './Todo.module.scss';
import Button from '../button/Button';
import Input from '../input/Input';


const Todo = ({todo, handleDone,handleDelete,setCurrentEdit, isEdit, handleEdit}) => {

    const [ inputValue, setInputValue ] = useState(todo.title);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    console.log(inputValue,'inputValue');

    return (
        <>
            <li className={`${classes.item} ${todo.completed && classes.done}`}>
                <div className={classes.info}>
                    <p>id:{todo.id}</p>
                    <p>title:{todo.title}</p>
                </div>
                <div className={classes.btns}>
                    <Button title={'Edit'} color={'green'} action={()=>setCurrentEdit(todo.id)}/>
                    <Button title={'Done'} color={'blue'} action={()=>handleDone(todo.id)}/>
                    <Button title={'Delete'} color={'red'} action={()=>handleDelete(todo.id)}/>
                </div>
            </li>
            {
                isEdit && <div className={classes.edit}>
                    {/*<Input onChange={handleChange} />*/}
                    <input type="text" onChange={handleChange} value={inputValue}/>
                    <Button title={'Save'} color={'green'} action={()=>{
                        setCurrentEdit(null)
                        handleEdit({
                            ...todo,
                            title:inputValue
                        })
                    }}/>
                    <Button title={'Cancel'} color={'red'} action={()=>{
                        setCurrentEdit(null)
                    }}/>
                </div>
            }
        </>
    );
};

export default Todo;