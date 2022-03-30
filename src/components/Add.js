import React from 'react';
import '../style.css';
function Add(props) {

  const { handleAddData, name, image, instructions,handleChange,index ,DisplayForm} = props;

  return (
    <div>
      
      <form className="form" onSubmit={(e)=>handleAddData(e,index)}>
        <h2 className='title'>Add Recipy</h2>
        <label>Recipy Name  </label>
        <input className="recipe-name"  name="name" value={name} onChange={handleChange} required />

        <label> Description </label>
          <textarea
          className='textarea'
          value={instructions}
            name="instructions"
            onChange={handleChange} 
            required
          />
          
    
        <label>Image url</label>
        <input  name="image"onChange={handleChange}  value={image} required/>   
        <div className='footer'>
        <button className='btn' type='submit'> add </button>
        <a className='btn' onClick={DisplayForm} >close</a>

        </div>

        
      </form>
    </div>
  );
}

export default Add;
