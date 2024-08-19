import React, { useEffect, useState } from 'react';
import Button from '../../components/button/Button';
import Modal from '../../components/modal/Modal';
import TodoList from '../../components/todoList/TodoList';
const BASE_URL = 'https://jsonplaceholder.typicode.com/'

export const getData = async (API) => {
    const response = await fetch(`${BASE_URL}${API}`)
    const data = await response.json()
    return data
}

const TodoPage = () => {

    const [ show, setShow ] = useState(false);
    const [ inputValue, setInputValue ] = useState('');
    const [ todoList, setTodoList ] = useState([]);

    const getTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response=>response.json())
        .then(data=>setTodoList(data))
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json => console.log(json))
    }








    useEffect(() => {
        console.log('useEffect');
    }, [ show, todoList ]);
    const handleShow = () => {
        setShow(!show);
        console.log(show, 'change');
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAdd = () => {
        setTodoList(prev => [ ...prev, {
            id: todoList.length === 0 ? 1 : todoList[ todoList.length - 1 ].id + 1,
            title: inputValue,
            completed: false
        } ]);
    };

    const handleEdit = (todoEdit) => {
        console.log(todoEdit);
        todoList.map(todo => {
            if(todoEdit.id===todo.id) return todo.title= todoEdit.title
        })
        setTodoList([...todoList])
    };

    const handleDone = (id) => {
        todoList.map(todo => {
            if (id === todo.id) {
                return todo.completed = !todo.completed;
            }
        });
        setTodoList([ ...todoList ]);
    };

    const handleDelete = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

    // const task = () => localStorage.setItem('task', JSON.stringify({
    //             id: 1,
    //             title: 'coding',
    //             completed: false
    //         }
    //     )
    // );
    // console.log(JSON.parse(localStorage.getItem('task')));
    //
    // useEffect(() => {
    //     task();
    // }, []);

    // useEffect(() => {
    //     const myLocalStorage = JSON.parse(localStorage.getItem('tasks'));
    //     if (myLocalStorage === null) {
    //         return localStorage.setItem('tasks', JSON.stringify(todoList));
    //     }
    //     if (myLocalStorage !== 0) {
    //         setTodoList(myLocalStorage);
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     localStorage.setItem('tasks', JSON.stringify(todoList));
    // }, [ todoList ]);
    //
    // const handleClear = () => {
    //     localStorage.removeItem('tasks')
    //     setTodoList([])
    // }

    return (
        <div>


            <Button action={getTodos} title={'getTodos'}/>

            <Button action={handleShow} title={'Открыть'}/>
            {/*<Button action={handleClear} title={'Очистить все'}/>*/}
            {
                show && <Modal action={handleShow} handleChange={handleChange} handleAdd={handleAdd}>
                    <h1>title</h1>
                </Modal>
            }

            <TodoList
                lists={todoList}
                handleDone={handleDone}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </div>
    );
};

export default TodoPage;