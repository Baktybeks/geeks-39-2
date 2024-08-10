import React from 'react';
import Title from '../title/Title';
import classes from './footer.module.css';


export const Footer = () => {
    return (
        <>
            <div>
                <Title title={'Footer'}/>
                <button className={classes.btn}>yellow</button>
            </div>
            <div>
                Footer2
            </div>
        </>
    );
};