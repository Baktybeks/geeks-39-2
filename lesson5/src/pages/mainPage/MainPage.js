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

        </div>
    );
};

export default MainPage;

const sum = (a, b) => {
    return a + b;
};

console.log(sum(5, 6));