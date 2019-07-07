import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='output'>
          <p>This is the first paragraph</p>
          <p>This is the second paragraph</p>
          <p>{props.username}</p>
        </div>
    )
};

export default userOutput;