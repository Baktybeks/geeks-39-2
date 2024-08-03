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


const MainPage = () => {
    const [show, setShow] = useState(false)
    // let show = false;
    console.log(show);

    const handleShow = () => {
        setShow(!show)
        // console.log(show);
        // show = true
        console.log(show,'change');
    }

    const [inputValue, setInputValue] = useState('')
    console.log(inputValue,'inputValue');
    const handleChange =(event)=> {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <input
                type="text"
                placeholder={'Введите текст'}
                onChange={handleChange}
            />
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
            <Counter/>
            <Button action={handleShow} title={'Открыть'}/>
            {
                show && <Modal action={handleShow} handleChange={handleChange}>
                    <h1>title</h1>
                </Modal>
            }
        </div>
    );
};

export default MainPage;

const sum = (a, b) => {
    return a + b;
};

console.log(sum(5, 6));