import React from 'react';
import '../style.css';
function Add(props) {

  const { handleAddData, name, image, instructions,handleChange,index } = props;

  return (
    <div>
      <form className="form" onSubmit={(e)=>handleAddData(e,index)}>
        <label>
          <input  name="name" value={name} onChange={handleChange} />
          recipy name
        </label>
        <label>
          <input
          value={instructions}
            name="instructions"
            onChange={handleChange} 
          />
          description
        </label>
        <label>
          <input  name="image"onChange={handleChange}  value={image} />
          
          url
        </label>
        <button > add </button>
      </form>
    </div>
  );
}

export default Add;
