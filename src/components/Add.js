import React from 'react';
import '../style.css';
function Add(props) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const { handleChange, name, url, description, addRecipy } = props;
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <label>
          <input onChange={handleChange} value={name} name="name" />
          recipy name
        </label>
        <label>
          <input
            onChange={handleChange}
            value={description}
            name="description"
          />
          description
        </label>
        <label>
          <input onChange={handleChange} value={url} name="url" />
          url
        </label>
        <button onClick={addRecipy}> add </button>
      </form>
    </div>
  );
}

export default Add;
