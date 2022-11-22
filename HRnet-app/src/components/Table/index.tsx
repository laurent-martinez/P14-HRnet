import "antd/dist/antd.css";
import "./table.scss";
import Table from "antd/lib/table";
import Input from "antd/lib/input";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { User } from "../../redux/user.slice";
import Nav from "../Nav";

function CurrentEmployees() {
  const { UserDatas } = useAppSelector((state) => state.user);
  const [searchedText, setSearchedText] = useState<string>("");
  const dataSource: User[] = UserDatas;

  const columns: ColumnsType<User> = [
    {
      title: "Names",
      render: (record) => (
        <>
          {record.firstname}
          <br />
          {record.lastname}
        </>
      ),
      responsive: ["xs"],
      filteredValue: [searchedText],
      onFilter: (value: any, record) => {
        return (
          String(record.firstname).toLowerCase().includes(value) ||
          String(record.lastname).toLowerCase().includes(value) ||
          String(record.department).toLowerCase().includes(value) ||
          String(record.states).toLowerCase().includes(value) ||
          String(record.city).toLowerCase().includes(value) ||
          String(record.zipCode).toLowerCase().includes(value)
        );
      },
      sorter: (a, b) => a.lastname.localeCompare(b.lastname),
    },
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
      filteredValue: [searchedText],
      onFilter: (value: any, record) => {
        return (
          String(record.firstname).toLowerCase().includes(value) ||
          String(record.lastname).toLowerCase().includes(value) ||
          String(record.department).toLowerCase().includes(value) ||
          String(record.states).toLowerCase().includes(value) ||
          String(record.city).toLowerCase().includes(value) ||
          String(record.zipCode).toLowerCase().includes(value)
        );
      },
      width: "110px",
      filterSearch: true,
      sorter: (a, b) => a.firstname.localeCompare(b.firstname),
      responsive: ["md", "lg", "sm"],
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
      sorter: (a, b) => a.lastname.localeCompare(b.lastname),
      responsive: ["md", "lg"],
      width: "110px",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      sorter: (a, b) => a.startDate.localeCompare(b.startDate),
      responsive: ["md", "lg", "sm", "xs"],
      width: "90px",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      sorter: (a, b) => a.department.localeCompare(b.department),
      responsive: ["md", "lg", "sm", "xs"],
      width: "120px",
    },
    {
      title: "D.O.B",
      dataIndex: "birthDate",
      key: "birthDate",
      sorter: (a, b) => a.birthDate.localeCompare(b.birthDate),
      responsive: ["lg", "md", "sm", "xs"],
      width: "110px",
    },
    {
      title: "address",
      render: (record) => (
        <>
          {record.street}
          <br />
          {`${record.city}, ${record.zipCode} ${record.states}`}
        </>
      ),
      sorter: (a, b) => a.city.localeCompare(b.city),
      responsive: ["xs"],
    },
    {
      title: "Street",
      dataIndex: "street",
      key: "street",
      sorter: (a, b) => a.street.localeCompare(b.street),
      responsive: ["md", "lg", "sm"],
      width: "200px",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      sorter: (a, b) => a.city.localeCompare(b.city),
      responsive: ["md", "lg", "sm"],
      width: "110px",
    },
    {
      title: "State",
      dataIndex: "states",
      key: "states",
      sorter: (a, b) => a.states.localeCompare(b.states),
      responsive: ["md", "lg", "sm"],
      width: "70px",
    },
    {
      title: "Zip Code",
      dataIndex: "zipCode",
      key: "zipCode",
      sorter: (a, b) => a.zipCode - b.zipCode,
      responsive: ["md", "lg", "sm"],
      width: "130px",
    },
  ];
  return (
    <main className="EmployeeTable">
      <Nav currentPage="Employees" goTo="" />
      <Input.Search
        placeholder="Search here..."
        onSearch={(value) => setSearchedText(value)}
        onChange={(e) => setSearchedText(e.target.value)}
      />
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          defaultPageSize: 10,
          style: { color: "white" },
          showSizeChanger: true,
          pageSizeOptions: ["10", "25", "50", "100"],
          showTotal: (total, range) =>
            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
          position: ["bottomRight"],
        }}
        className="table"
        scroll={{ x: 800, y: 350 }}
      />
    </main>
  );
}

export default CurrentEmployees;
