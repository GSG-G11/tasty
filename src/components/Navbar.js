import React from 'react';

function Navbar({ DisplayForm }) {
  return (
    <nav className="nav-wrapper">
      <div className="logo-container">
        <img
          src="https://media.discordapp.net/attachments/937648625293598821/958787308973359135/hamburger.png"
          alt="logo"
          className="logo"
        />
        <h4>Tasty</h4>
      </div>
      <form className="form-wrapper">
        <input className="input" placeholder="Search for recipies" required />
        <i className="fa fa-search" />
      </form>
      <div className="recipies-controllers">
        <p onClick={DisplayForm}>
          <i className="fa fa-plus"></i>
          Add Recipy
        </p>
        <p>My recipies</p>
      </div>
    </nav>
  );
}

export default Navbar;
