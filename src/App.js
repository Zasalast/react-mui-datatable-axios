import logo from "./logo.svg";
import "./App.css";
import { TableBasic } from "./tables/TableBasic";
import { TableJson } from "./tables/TableJson";

function App() {
  return (
    <div className="App">
      <TableBasic />
      <TableJson />
    </div>
  );
}

export default App;
