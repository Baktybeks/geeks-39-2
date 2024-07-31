import React from 'react';


const Button = (props) => {
    const {title, name} = props
    return (
        <button>{title}</button>
    );
};

export default Button;