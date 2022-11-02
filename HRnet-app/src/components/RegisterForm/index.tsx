import 'antd/dist/antd.css';
import './registerForm.scss';
import { Select, Form, DatePicker, Input, InputNumber, Button } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addUser, User } from '../../redux/user.slice';
import stateNames from '../../Datas/states';

function RegisterForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const [firstname, setFirstname] = useState<string>('');
  // const [lastname, setLastname] = useState<string>('');
  // const [birthDate, setBirthDate] = useState<string>();
  // const [startDate, setStartDate] = useState<string>();
  // const [street, setStreet] = useState<string>('');
  // const [city, setCity] = useState<string>('');
  // const [states, setStates] = useState<string>('');
  // const [zipCode, setZipCode] = useState<number>(0);
  // const [department, setDepartment] = useState<string>('');
  const { UserDatas } = useAppSelector((state) => state.user);

  // const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case 'firstname':
  //       setFirstname(value);
  //       break;
  //     case 'lastname':
  //       setLastname(value);
  //       break;
  //     case 'birthDate':
  //       setBirthDate(value);
  //       break;
  //     case 'startDate':
  //       setStartDate(value);
  //       break;
  //     case 'street':
  //       setStreet(value);
  //       break;
  //     case 'city':
  //       setCity(value);
  //       break;
  //     case 'states':
  //       setStates(value);
  //       break;
  //     case 'zipCode':
  //       setZipCode(value);
  //       break;
  //     case 'department':
  //       setDepartment(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const id = lastname.slice(0, 3) + Math.floor(Math.random() * 100);
  // const userArray = {
  //   id,
  //   firstname,
  //   lastname,
  //   birthDate,
  //   startDate,
  //   street,
  //   city,
  //   states,
  //   zipCode,
  //   department,
  // };
  const handleSubmit = (e) => {
    e.birthDate = e.birthDate.format('MM-DD-YYYY');
    e.startDate = e.startDate.format('MM-DD-YYYY');
    console.log(e);
    dispatch(addUser({ ...e }));
    navigate('/employees');
  };

  return (
    <Form className="registerForm" onFinish={handleSubmit} layout="vertical">
      <div className="mainInfo">
        <Form.Item
          label="First Name"
          name="firstname"
          className="firstname inputSpace"
        >
          <Input required autoComplete="off" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastname"
          className="lastname inputSpace"
        >
          <Input required autoComplete="off" />
        </Form.Item>

        <Form.Item className="birthDate" name="birthDate" label="Day of Birth">
          <DatePicker picker="date" format="MM/DD/YYYY" />
        </Form.Item>
        <Form.Item className="startDate" label="Start Date" name="startDate">
          <DatePicker picker="date" format="MM/DD/YYYY" />
        </Form.Item>
      </div>
      <div className="address">
        <Form.Item className="street inputSpace" label="Street" name="street">
          <Input required />
        </Form.Item>
        <Form.Item className="city inputSpace" name="city" label="City">
          <Input required />
        </Form.Item>
        <Form.Item className="state inputSpace" label="State" name="states">
          <Select style={{ width: 190 }}>
            {stateNames.map((options, index) => (
              <Select.Option key={index} value={options.toLowerCase()}>
                {options}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          className="zipCode inputSpace"
          label="Zip Code"
          name="zipCode"
        >
          <InputNumber />
        </Form.Item>
      </div>
      <div className="department">
        <Form.Item name="department" label="Department">
          <Select>
            <Select.Option value="sales">sales</Select.Option>
            <Select.Option value="marketing">marketing</Select.Option>
            <Select.Option value="engineering">Engineering</Select.Option>
            <Select.Option value="human resources">
              Human Resources
            </Select.Option>
            <Select.Option value="legal">Legal</Select.Option>
          </Select>
        </Form.Item>
      </div>
      <div className="save">
        <Button className="save__button" type="primary" htmlType="submit">
          Save
        </Button>
      </div>
    </Form>
  );
}

export default RegisterForm;
