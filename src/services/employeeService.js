export const getDepartmentCollection = () => [
  { id: "1", title: "Development" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Accounting" },
  { id: "4", title: "HR" },
];

//
const KEYS = {
  employees: "employees",
  employeesID: "employeesID",
};

export const insertEmployee = (data) => {
  let employees = getAllEmployees();
  data["id"] = generateEmployeeID();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

export const generateEmployeeID = () => {
  if (localStorage.getItem(KEYS.employeesID) == null)
    localStorage.setItem(KEYS.employeesID, "0");
  var id = parseInt(localStorage.getItem(KEYS.employeesID));
  localStorage.setItem(KEYS.employeesID, (++id).toString());
  return id;
};

export const getAllEmployees = () => {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(KEYS.employees));
};
