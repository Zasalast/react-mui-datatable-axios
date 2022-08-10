import MUIDataTable from "mui-datatables";
import React from "react";
const columns = ["Nombre", "Empresa", "Ciudad", "Departamento"];
const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
];
const options = {
  filterType: "checkbox",
};

function TableBasic() {
  return (
    <MUIDataTable
      title={"Lista de Empleados"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export { TableBasic };
