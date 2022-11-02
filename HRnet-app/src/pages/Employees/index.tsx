import '../../styles/index.scss';
import './employees.scss';

import React from 'react';
// import DataTable from '../../components/DataTable';
// import SideBar from '../../components/SideBar';
import CurrentEmployees from '../../components/Table';
import Logo from '../../components/Logo';

function Employees() {
  return (
    <div className="employees">
      <Logo />
      {/* <SideBar /> */}
      <CurrentEmployees />
    </div>
  );
}

export default Employees;
