import React from 'react';
import classes from './Modal.module.css';
import Button from '../button/Button';
import Input from '../input/Input';


const Modal = ({ action, children, handleChange, handleAdd }) => {
    return (
        <div >
            <div className={classes.modalWrapper}/>
            <div className={classes.modalContent}>
                <Button title={'Закрыть'} action={action}/>
                <Input type={'text'} placeholder={'Введите текст'} onChange={handleChange}/>
                <Button title={'Добавить'} action={handleAdd}/>

                {children}
            </div>
        </div>
    );
};

export default Modal;