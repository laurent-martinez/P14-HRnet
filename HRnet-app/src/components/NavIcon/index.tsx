import './navLink.scss';

import React from 'react';

interface iconProps {
  icon: string;
}

function NavIcon( props) {
  return (
    <div className="navIcon">
      <img src={`./img/${props.icon}`} alt="employees icon" />
      <h2 className="navIcon__title">Employees</h2>
    </div>
  );
}

export default NavIcon;
