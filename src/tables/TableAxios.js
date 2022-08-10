import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import users from "./users.json";
import axios from "axios";
const columns = [
  { name: "id", label: "ID" },
  { name: "title", label: "Nombre" },
  { name: "category", label: "Categoria" },
  { name: "price", label: "Precio" },
];

function TableAxios() {
  //define and config hooks
  const [products, setProducts] = useState([]);
  //define variable data
  const endpoint = "https://fakestoreapi.com/products";
  //define function with axios
  const getData = async () => {
    await axios.get(endpoint).then((response) => {
      const data = response.data;
      console.log(data);
      setProducts(data);
    });
  };
  //call function getData with hooks useEffect
  useEffect(() => {
    getData();
  }, []);

  //render data
  return (
    <MUIDataTable
      title={"Lista de Empleados"}
      data={products}
      columns={columns}
    />
  );
}

export { TableAxios };
