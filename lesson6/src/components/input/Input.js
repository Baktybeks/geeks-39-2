import React from 'react';


const Input = ({placeholder, onChange, type='text'}) => {
    return (
        <input type={type} placeholder={placeholder} onChange={onChange}/>
    );
};

export default Input;