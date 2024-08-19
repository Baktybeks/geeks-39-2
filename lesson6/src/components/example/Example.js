import React from 'react';


const Example = ({title, children}) => {
    return (
        <div>
            {title}
            {children}
        </div>
    );
};

export default Example;