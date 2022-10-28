import './sidebar.scss';
import Logo from '../Logo';
import NavIcon from '../NavIcon';

function SideBar() {
  return (
    <div className="sidebar">
      <Logo />
      <nav className="sidebar__nav">
        <NavIcon icon="registerIcon.svg" />
        <NavIcon icon="employeesIcon.svg" />
      </nav>
    </div>
  );
}

export default SideBar;
