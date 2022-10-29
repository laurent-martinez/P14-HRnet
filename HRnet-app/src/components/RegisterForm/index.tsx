import './registerForm.scss';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addUser } from '../../redux/user.slice';

function RegisterForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>();
  const [startDate, setStartDate] = useState<string>();
  const [street, setStreet] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [states, setStates] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>();
  const [department, setDepartment] = useState<string>('');
  const { UserDatas } = useAppSelector((state) => state.user);

  useEffect(() => {
    UserDatas.map((use) => console.log("silvio",use.firstname));
  }, [UserDatas]);

  const userArray = {
    firstname,
    lastname,
    birthDate,
    startDate,
    street,
    city,
    states,
    zipCode,
    department,
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstname':
        setFirstname(value);
        break;
      case 'lastname':
        setLastname(value);
        break;
      case 'birthDate':
        setBirthDate(value);
        break;
      case 'startDate':
        setStartDate(value);
        break;
      case 'street':
        setStreet(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'states':
        setStates(value);
        break;
      case 'zipCode':
        setZipCode(value);
        break;
      case 'department':
        setDepartment(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addUser(userArray));
    navigate('/employees');
  };

  return (
    <form className="registerForm" onSubmit={handleSubmit}>
      <div className="mainInfo">
        <div className="firstname inputSpace">
          <label
            htmlFor="firstname"
            className="labelFirst
          "
          >
            <input
              type="text"
              name="firstname"
              id="firstname"
              required
              autoComplete="off"
              onChange={handleOnChange}
            />
            First Name
          </label>
        </div>
        <div className="lastname inputSpace">
          <label
            htmlFor="lastname"
            className="labelFirst
          "
          >
            <input
              type="text"
              name="lastname"
              id="lastname"
              required
              autoComplete="off"
              onChange={handleOnChange}
            />
            Last Name
          </label>
        </div>
        <div className="birthDate inputSpace">
          <label
            htmlFor="birthDate"
            className="labelFirst
          "
          >
            <input
              type="Date"
              name="birthDate"
              id="birthDate"
              required
              autoComplete="off"
              onChange={handleOnChange}
            />
            Date of Birth
          </label>
        </div>
        <div className="startDate inputSpace">
          <label
            htmlFor="startDate"
            className="labelFirst
          "
          >
            <input
              type="Date"
              name="startDate"
              id="startDate"
              required
              autoComplete="off"
              onChange={handleOnChange}
            />
            Start Date
          </label>
        </div>
      </div>
      <div className="address">
        <div className="street inputSpace">
          <label
            htmlFor="street"
            className="labelFirst
          "
          >
            <input
              type="text"
              name="street"
              id="street"
              required
              autoComplete="off"
              onChange={handleOnChange}
            />
            Street
          </label>
        </div>
        <div className="city inputSpace">
          <label
            htmlFor="city"
            className="labelFirst
          "
          >
            <input
              type="text"
              name="city"
              id="city"
              required
              autoComplete="off"
              onChange={handleOnChange}
            />
            City
          </label>
        </div>
        <div className="state inputSpace">
          <label htmlFor="states" className="labelFirst">
            State
          </label>
          <select name="states" id="states" onChange={handleOnChange}>
            <option value="sales">sales</option>
            <option value="marketing">marketing</option>
          </select>
        </div>
        <div className="zipCode inputSpace">
          <label
            htmlFor="zipCode"
            className="labelFirst
          "
          >
            <input
              type="number"
              name="zipCode"
              id="zipCode"
              required
              autoComplete="off"
              onChange={handleOnChange}
            />
            Zip Code
          </label>
        </div>
      </div>
      <div className="department">
        <label htmlFor="department" className="labelFirst">
          Department
        </label>
        <select name="department" id="department" onChange={handleOnChange}>
          <option value="sales">sales</option>
          <option value="marketing">marketing</option>
        </select>
      </div>
      <div className="save">
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default RegisterForm;
