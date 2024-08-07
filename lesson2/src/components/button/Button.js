import React from 'react';
import classes from './Button.module.css';


const Button = (props) => {
    const {title, color, name,action} = props
    // const ss= {
    //     name: 'Bakyt',
    //     "age ger": 18
    // }
    // console.log(ss.name, '44444');
    // console.log(ss['age ger'], "5555");
    return (
        <button className={`${classes.btn} ${classes[color]}`}
                onClick={action}
        >{title}</button>
    );
};

export default Button;