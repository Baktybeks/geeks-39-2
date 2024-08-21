import React from 'react';
import classes from './List.module.css';


const List = ({list}) => {
    return (
        <ul className={classes.list}>
            {
                list.map(item=> <li className={classes.item} key={item.id}>{item.title}</li>)
            }
        </ul>
    );
};

export default List;