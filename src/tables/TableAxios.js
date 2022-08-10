import React from "react";
import MUIDataTable from "mui-datatables";
import users from "./users.json";
const columns = [
  { name: "id", label: "ID" },
  { name: "name", label: "NOMBRE" },
  { name: "email", label: "CORREO" },
];

function TableAxios() {
  //define and config hooks

  //funtion

  //render data
  return (
    <MUIDataTable title={"Lista de Empleados"} data={users} columns={columns} />
  );
}

export { TableAxios };
