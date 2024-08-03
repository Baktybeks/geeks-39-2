import React from 'react';
import Day from '../day/Day';


const Month = ({date}) => {
    return (
        <div>
            <p>Завтра будет {date}</p>
            <Day week_day={'четверг'}/>
        </div>
    );
};

export default Month;