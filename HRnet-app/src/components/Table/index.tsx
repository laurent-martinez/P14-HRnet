import 'antd/dist/antd.css';
import './table.scss';
import { Table, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { User } from '../../redux/user.slice';

function CurrentEmployees() {
  const { UserDatas } = useAppSelector((state) => state.user);
  const [searchedText, setSearchedText] = useState<string>('');
  const dataSource: User[] = UserDatas;

  const columns: ColumnsType<User> = [
    {
      title: 'First Name',
      dataIndex: 'firstname',
      key: 'firstname',
      filteredValue: [searchedText],
      onFilter: (value: string, record) => {
        return (
          String(record.firstname).toLowerCase().includes(value) ||
          String(record.lastname).toLowerCase().includes(value) ||
          String(record.department).toLowerCase().includes(value) ||
          String(record.states).toLowerCase().includes(value) ||
          String(record.city).toLowerCase().includes(value) ||
          String(record.zipCode).toLowerCase().includes(value)
        );
      },
      filterSearch: true,
      sorter: (a, b) => a.firstname.localeCompare(b.firstname),
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
      key: 'lastname',
      sorter: (a, b) => a.lastname.localeCompare(b.lastname),
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      sorter: (a, b) => a.department.localeCompare(b.department),
    },
    {
      title: 'Date of Birth',
      dataIndex: 'birthDate',
      key: 'birthDate',
    },
    {
      title: 'Street',
      dataIndex: 'street',
      key: 'street',
      sorter: (a, b) => a.street.localeCompare(b.street),
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      sorter: (a, b) => a.city.localeCompare(b.city),
    },
    {
      title: 'State',
      dataIndex: 'states',
      key: 'states',
      sorter: (a, b) => a.states.localeCompare(b.states),
    },
    {
      title: 'Zip Code',
      dataIndex: 'zipCode',
      key: 'zipCode',
      sorter: (a, b) => a.zipCode - b.zipCode,
    },
  ];
  return (
    <div className="EmployeeTable">
      <h1 className="EmployeeTable__title">Employees</h1>
      <Input.Search
        placeholder="Search here..."
        style={{ marginBottom: 8, width: 150, left: 0 }}
        onSearch={(value) => setSearchedText(value)}
        onChange={(e) => setSearchedText(e.target.value)}
      />
      <Table dataSource={dataSource} columns={columns} className="table" />;
    </div>
  );
}

export default CurrentEmployees;
