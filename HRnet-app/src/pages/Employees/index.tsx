import '../../styles/index.scss';
import './employees.scss';

import React from 'react';
import DataTable from '../../components/DataTable';
import SideBar from '../../components/SideBar';

function Employees() {
  return (
    <div className="employees">
      <SideBar />
      <DataTable />
    </div>
  );
}

export default Employees;
