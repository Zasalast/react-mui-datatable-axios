import logo from "./logo.svg";
import "./App.css";
import { TableBasic } from "./tables/TableBasic";
import { TableJson } from "./tables/TableJson";
import { TableAxios } from "./tables/TableAxios";
import { Content } from "./layout/content/content";

function App() {
  return (
    <div className="App">
      {/* use data array */}
      <TableBasic />
      {/*  use data file json */}
      <TableJson />
      {/* apply dark style */}
      <Content>
        <TableAxios />
      </Content>
    </div>
  );
}

export default App;
