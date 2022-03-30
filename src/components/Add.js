import React from 'react';
import '../style.css';
function Add(props) {

  const { handleAddData, name, url, description } = props;
  return (
    <div>
      <form className="form" onSubmit={handleAddData}>
        <label>
          <input  name="name" />
          recipy name
        </label>
        <label>
          <input
          
            name="description"
          />
          description
        </label>
        <label>
          <input  name="url" />
          url
        </label>
        <button > add </button>
      </form>
    </div>
  );
}

export default Add;
