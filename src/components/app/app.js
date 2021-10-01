import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

function App() {
  const date = [
    { name: "John W.", salary: 1000, bonus: true },
    { name: "Karl G.", salary: 2000, bonus: true },
    { name: "Gringo D.", salary: 1800, bonus: false },
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
