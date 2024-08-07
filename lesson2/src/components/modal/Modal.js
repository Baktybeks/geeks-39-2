import React from 'react';
import classes from './Modal.module.css';
import Button from '../button/Button';


const Modal = ({ action, children, handleChange }) => {
    return (
        <div>
            <div className={classes.modalWrapper}/>
            <div className={classes.modalContent}>
                <Button title={'Закрыть'} action={action} name={'close'}/>
                <input type="text" onChange={handleChange}/>
                {children}
            </div>
        </div>
    );
};

export default Modal;