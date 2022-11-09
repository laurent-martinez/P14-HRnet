import './register.scss';
import React from 'react';
import { Link } from 'react-router-dom';
// import SideBar from '../../components/SideBar';
import RegisterForm from '../../components/RegisterForm';



function Register() {
  return (
    <div className="register">
      {/* <SideBar /> */}
      <Link to="/employees" className="register__title">
        Employees
      </Link>
      <div className="register__formWrapper">
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
