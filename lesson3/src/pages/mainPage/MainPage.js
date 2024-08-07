import React, { useState } from 'react';
import Header from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import Button from '../../components/button/Button';
import User from '../../components/user/User';
import Course from '../../components/course/Course';
import Month from '../../components/month/Month';
import Input from '../../components/input/Input';
import Example from '../../components/example/Example';
import Modal from '../../components/modal/Modal';
import Counter from '../../components/count/Counter';
import List from '../../components/list/List';
import TodoList from '../../components/todoList/TodoList';
import classes from './MainPage.module.scss';


const MainPage = () => {
    const [ show, setShow ] = useState(false);
    const [ inputValue, setInputValue ] = useState('');
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: 'coding',
            completed: false
        },
        {
            id: 2,
            title: 'eat',
            completed: false
        },
        {
            id: 3005,
            title: 'sleep',
            completed: false
        }
    ])
    const handleShow = () => {
        setShow(!show);
        // console.log(show);
        // show = true
        console.log(show, 'change');
    };

    console.log(inputValue, 'inputValue');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAdd = () => {
        console.log('add');
        setTodoList(prev=>[...prev,{
            id: todoList[todoList.length-1].id + 1,
            title: inputValue,
            completed: false
        }])
    };

    const handleDone = (id)=> {
        todoList.map(todo=> {
            if(id===todo.id) {
                return todo.completed=!todo.completed
            }
        })
        setTodoList([...todoList])
    }

    const handleDelete = (id) => {
        console.log(id);
    }



    return (
        <div className={classes.wrapper}>
            {/*<Input type={'password'} placeholder={'Введите текст'} onChange={handleChange}/>*/}
            {/*<Input  placeholder={'Введите текст'} onChange={handleChange}/>*/}
            {/*<p>{inputValue}</p>*/}
            {/*<Header/>*/}
            {/*<Footer />*/}
            {/*<Button title={'Close'} name={'Bakyt'} color={'red'}/>*/}
            {/*<Button title={'Open'} name={'Bakyt'} color={'blue'}/>*/}
            {/*<Button title={'Save'} name={'Bakyt'} color={'pink'}/>*/}
            {/*<button className='btn'>red</button>*/}
            {/*<User name={'Bakyt'} age={'18'}/>*/}
            {/*<Course title={'JS'} language={'english'}/>*/}
            {/*<Month date={1}/>*/}
            {/*<Input placeholder={'введите текст'}/>*/}
            {/*<Example title={'Название'}>*/}
            {/*    <p style={{color: 'red', fontSize: 25}}>name: Bakyt</p>*/}
            {/*    <p style={{color: 'blue', fontSize: 20}}>age: 18</p>*/}
            {/*</Example>*/}
            {/*<Counter/>*/}
            <Button action={handleShow} title={'Открыть'}/>
            {
                show && <Modal action={handleShow} handleChange={handleChange} handleAdd={handleAdd}>
                    <h1>title</h1>
                </Modal>
            }
            {/*<List list={list}/>*/}
            <TodoList lists={todoList} handleDone={handleDone} handleDelete={handleDelete}/>
        </div>
    );
};

export default MainPage;

const sum = (a, b) => {
    return a + b;
};

console.log(sum(5, 6));