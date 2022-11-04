import '../../styles/index.scss';
import './employees.scss';
import { Link } from 'react-router-dom';
import React from 'react';
// import DataTable from '../../components/DataTable';
// import SideBar from '../../components/SideBar';
import CurrentEmployees from '../../components/Table';
// import Logo from '../../components/Logo';

function Employees() {
  return (
    <div className="employees">
      <Link className="employees__title" to="/">
        Register
      </Link>
      {/* <Logo /> */}
      {/* <SideBar /> */}
      <CurrentEmployees />
    </div>
  );
}

export default Employees;
