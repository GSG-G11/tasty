import React from 'react';

function Navbar({DisplayForm}) {
    return (
        <div>
            <p onClick={DisplayForm}>
                <i className='fa fa-plus'></i>
            </p>
            
        </div>
    );
}

export default Navbar;