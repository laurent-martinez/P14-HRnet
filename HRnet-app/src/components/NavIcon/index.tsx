import './navLink.scss';

import React from 'react';
import { Link } from 'react-router-dom';

interface IconProps {
  icon: string;
  ClName: string;
  title: string;
  urlPage: string;
}

function NavIcon({ icon, ClName, title, urlPage }: IconProps) {
  return (
    <Link to={`${urlPage}`}>
      <div className={`navIcon ${ClName}`}>
        <img src={`./img/${icon}`} alt="employees icon" />
        <h2 className="navIcon__title">{title}</h2>
      </div>
    </Link>
  );
}

export default NavIcon;
