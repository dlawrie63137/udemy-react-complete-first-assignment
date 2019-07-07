import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  const style = {
              margin: '10px'
             };
  
    return (
        <div className='input'>
          <h4>Input Box</h4>
          <input type='text' style={style} onChange={props.changed} value={props.currName}></input>
        </div>
    )
};

export default userInput;