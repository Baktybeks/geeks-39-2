import React from 'react';
import classes from './Pagination.module.scss';


const Pagination = ({prev, next, page}) => {
    return (
        <div className={classes.pagination}>
            <button onClick={prev}>prev</button>
            {page}
            <button onClick={next}>next</button>
        </div>
    );
};

export default Pagination;