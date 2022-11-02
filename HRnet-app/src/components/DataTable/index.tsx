/* eslint-disable react/jsx-props-no-spreading */
import './dataTable.scss';
import { Column, useTable } from 'react-table';
import React, { FC, useMemo, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { User } from '../../redux/user.slice';

const columns: Array<Column<User>> = [
  {
    Header: 'First Name',
    accessor: 'firstname',
  },
  {
    Header: 'Last Name',
    accessor: 'lastname',
  },
  {
    Header: 'Start Date',
    accessor: 'startDate',
  },
  {
    Header: 'Department',
    accessor: 'department',
  },
  {
    Header: 'Birth Date',
    accessor: 'birthDate',
  },
  {
    Header: 'Street',
    accessor: 'street',
  },
  {
    Header: 'City',
    accessor: 'city',
  },
  {
    Header: 'States',
    accessor: 'states',
  },
  {
    Header: 'Zip Code',
    accessor: 'zipCode',
  },
];

function DataTable() {
  const { UserDatas } = useAppSelector((state) => state.user);
  console.log(UserDatas);
  const data = [...UserDatas];
  const { getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <div className="tableContainer">
      <h2 className="register__formWrapper__title top">Current Employees</h2>
      <table className="table">
        <thead className="table__thead">
          {headerGroups.map((headerGroup) => (
            <tr
              className="table__thead__tr"
              {...headerGroup.getHeaderGroupProps()}
              key={Math.floor(Math.random() * 100) + 1}
            >
              {headerGroup.headers.map((colum) => (
                <th
                  className="table__thead__tr__th"
                  {...colum.getHeaderProps()}
                  scope="col"
                  key={Math.floor(Math.random() * 100) + 2}
                >
                  {colum.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={Math.floor(Math.random() * 100) + 3}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      key={Math.floor(Math.random() * 100) + 4}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
