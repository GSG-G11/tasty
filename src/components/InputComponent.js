import React from 'react';

function InputComponent(props) {
    const{handleChange,name ,value}=props
    console.log(value)
    return (
        <div>
            <label>
            <input onChange={handleChange} value={value} name={name} />
            {name}
            </label>
        </div>
    );
}

export default InputComponent;