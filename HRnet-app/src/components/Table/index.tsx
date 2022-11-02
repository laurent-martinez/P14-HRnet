import 'antd/dist/antd.css';
import './table.scss';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useAppSelector } from '../../redux/hooks';
import { User } from '../../redux/user.slice';

function CurrentEmployees() {
  const { UserDatas } = useAppSelector((state) => state.user);
  const dataSource: User[] = UserDatas;
  const columns: ColumnsType<User> = [
    {
      title: 'First Name',
      dataIndex: 'firstname',
      key: 'firstname',
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
      <Table dataSource={dataSource} columns={columns} className="table" />;
    </div>
  );
}

export default CurrentEmployees;
