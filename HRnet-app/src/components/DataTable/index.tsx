import './dataTable.scss';

import React from 'react';
import { useAppSelector } from '../../redux/hooks';

function DataTable() {
  const { UserDatas } = useAppSelector((state) => state.user);

  return (
    <table>
      <tr>
        <th>First name</th>
        <th>Last Name</th>
        <th>Birth Date</th>
        <th>Start Date</th>
        <th>Street</th>
        <th>City</th>
        <th>State</th>
        <th>Zip Code</th>
        <th>Department</th>
      </tr>
      <tr className="tr">
        {UserDatas.map((use, index) => (
          <td key={index + 1}>{use.firstname}</td>
        ))}
      </tr>
    </table>
  );
}

export default DataTable;
