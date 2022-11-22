import "../../styles/index.scss";
import "./employees.scss";
import CurrentEmployees from "../../components/Table";

/**
 *
 * functionnal component who render the Employees page
 */
function Employees() {
  return (
    <div className="employees">
      <CurrentEmployees />
    </div>
  );
}

export default Employees;
