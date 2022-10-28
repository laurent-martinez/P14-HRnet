import './register.scss';

import React from 'react';
import SideBar from '../../components/SideBar';
import RegisterForm from '../../components/RegisterForm';

function Register() {
  return (
    <div className="register">
      <SideBar />
      <div className="register__formWrapper">
        <h2 className="register__formWrapper__title">Create Employee</h2>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
