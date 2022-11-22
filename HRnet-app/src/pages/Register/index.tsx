import "./register.scss";
import RegisterForm from "../../components/RegisterForm";
import Nav from "../../components/Nav";

/**
 * 
 * functionnal component who render the register page
 */
function Register() {
  return (
    <div className="register">
      <div className="register__formWrapper">
        <Nav currentPage="" goTo="Employees" />
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
