import './registerForm.scss';

import React from 'react';

function RegisterForm() {
  return (
    <form className="registerForm">
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
            />
            City
          </label>
        </div>
        <div className="state inputSpace">
          <label for="state" className='labelFirst'>State</label>
          <select name="state" id="state">
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
            />
            Zip Code
          </label>
        </div>
      </div>
      <div className="department">
      <label for="department" className='labelFirst'>Department</label>
          <select name="department" id="department">
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
