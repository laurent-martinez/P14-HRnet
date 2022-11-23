import "antd/dist/antd.css";
import "./table.scss";
import Table from "antd/lib/table";
import Input from "antd/lib/input";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { User } from "../../redux/user.slice";
import Nav from "../Nav";

/**
 *
 * functionnal component who render the data table of all the workers successfully registered
 */
function CurrentEmployees() {
  // Get the array of all the workers registered from the redux store
  const { UserDatas } = useAppSelector((state) => state.user);
  // get the values of the searchField to filter the datas
  const [searchedText, setSearchedText] = useState<string>("");
  const dataSource: User[] = UserDatas;
  // defining the columns for antd table with correct types
  const columns: ColumnsType<User> = [
    {
      // gather table columns on small screens
      title: "Names",
      defaultSortOrder: "descend",
      render: (record) => (
        <>
          {record.firstname}
          <br />
          {record.lastname}
        </>
      ),
      responsive: ["xs"],
      // filtering the datas with search field values
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
      // sorting workers according to last name
      sorter: (a, b) => a.lastname.localeCompare(b.lastname),
    },
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
      defaultSortOrder: "descend",
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
      width: "120px",
      filterSearch: true,
      sorter: (a, b) => a.firstname.localeCompare(b.firstname),
      // defining on which size of screen this column will be displayed
      responsive: ["md", "lg", "sm"],
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.lastname.localeCompare(b.lastname),
      responsive: ["md", "lg"],
      width: "120px",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.startDate.localeCompare(b.startDate),
      responsive: ["md", "lg", "sm", "xs"],
      width: "110px",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.department.localeCompare(b.department),
      responsive: ["md", "lg", "sm", "xs"],
      width: "130px",
    },
    {
      title: "D.O.B",
      dataIndex: "birthDate",
      key: "birthDate",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.birthDate.localeCompare(b.birthDate),
      responsive: ["lg", "md", "sm", "xs"],
      width: "110px",
    },
    {
      // gather the address details on one column in small screens
      title: "address",
      defaultSortOrder: "descend",
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
      defaultSortOrder: "descend",
      sorter: (a, b) => a.street.localeCompare(b.street),
      responsive: ["md", "lg", "sm"],
      width: "180px",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.city.localeCompare(b.city),
      responsive: ["md", "lg", "sm"],
      width: "110px",
    },
    {
      title: "State",
      dataIndex: "states",
      key: "states",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.states.localeCompare(b.states),
      responsive: ["md", "lg", "sm"],
      width: "80px",
    },
    {
      title: "Zip Code",
      dataIndex: "zipCode",
      key: "zipCode",
      defaultSortOrder: "descend",
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
        // give a random key to rows
        rowKey={(Math.random() + 1).toString(36).substring(7)}
        columns={columns}
        pagination={{
          defaultPageSize: 10,
          style: { color: "white" },
          showSizeChanger: true,
          // settle the among of rows that will be displayed on the table
          pageSizeOptions: ["10", "25", "50", "100"],
          showTotal: (total, range) =>
            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
          position: ["bottomRight"],
        }}
        className="table"
        // define on which height and width the scroll of the table will start
        scroll={{ x: 800, y: 350 }}
      />
    </main>
  );
}

export default CurrentEmployees;
