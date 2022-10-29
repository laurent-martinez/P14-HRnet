import './sidebar.scss';
import Logo from '../Logo';
import NavIcon from '../NavIcon';

function SideBar() {
  return (
    <div className="sidebar">
      <Logo />
      <nav className="sidebar__nav">
        <NavIcon
          icon="registerIcon.svg"
          urlPage="/"
          title="Register"
          ClName="registrate"
        />
        <NavIcon
          icon="employeesIcon.svg"
          urlPage="/employees"
          title="Employees"
          ClName="employ"
        />
      </nav>
    </div>
  );
}

export default SideBar;
