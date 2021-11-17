import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
          to="/"
          exact
          // style={link}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          exact
          // style={link}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Movies 
        </NavLink>
        <NavLink
          to="/actors"
          exact
          // style={link}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Actors
        </NavLink>
        <NavLink
          to="/directors"
          exact
          // style={link}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Directors
        </NavLink>
    </div>
  );
};

export default NavBar;


//This component needs to render 4 `<NavLink>` components. They will be for **/,
//movies, /directors, /actors** <-- in this order(test checks for this).