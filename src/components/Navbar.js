import React from 'react';

function Navbar({
  DisplayForm,
  handleSearch,
  handleMyRecepies,
  handleHomePage,
}) {
  return (
    <nav className="nav-wrapper">
      <div className="logo-container" onClick={handleHomePage}>
        <img
          src="https://media.discordapp.net/attachments/937648625293598821/958787308973359135/hamburger.png"
          alt="logo"
          className="logo"
        />
        <h4>Tasty</h4>
      </div>
      <form className="form-wrapper">
        <input
          onChange={handleSearch}
          name="search"
          className="input"
          placeholder="Search for recipies"
          required
        />
        <i className="fa fa-search" />
      </form>
      <div className="recipies-controllers">
        <p onClick={DisplayForm}>
          <i className="fa fa-plus"></i>
          Add Recipy
        </p>
        <p onClick={handleMyRecepies}>My recipies</p>
      </div>
    </nav>
  );
}

export default Navbar;
