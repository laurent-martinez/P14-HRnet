import '../../styles/index.scss';
import './employees.scss';
import CurrentEmployees from '../../components/Table';


function Employees() {
  return (
    <div className="employees">
      <CurrentEmployees />
    </div>
  );
}

export default Employees;
