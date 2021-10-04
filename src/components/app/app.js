import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

function App() {
  const date = [
    { name: "John W.", salary: 1000, increase: true, like: false },
    { name: "Karl G.", salary: 2000, increase: true, like: false },
    { name: "Gringo D.", salary: 1800, increase: false, like: false },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={date} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
