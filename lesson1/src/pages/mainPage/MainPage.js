import React from 'react';
import Header from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import Button from '../../components/button/Button';
import User from '../../components/user/User';
import Course from '../../components/course/Course';
import Month from '../../components/month/Month';


const MainPage = () => {
    return (
        <div>
            <Header/>
            <Footer />
            <Button title={'Close'} name={'Bakyt'}/>
            <Button title={'Open'} name={'Bakyt'}/>
            <Button title={'Save'} name={'Bakyt'}/>
            <Button title={'delete'} name={'Bakyt'}/>
            <Button title={'done'} name={'Bakyt'}/>
            <User name={'Bakyt'} age={'18'}/>
            <Course title={'JS'} language={'english'}/>
            <Month date={1}/>
        </div>
    );
};

export default MainPage;

const sum = (a,b) => {
    return a+b
}

console.log(sum(5,6));