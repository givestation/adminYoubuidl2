import "./App.css";
import { Header } from "./components/Header";
import { Cards } from "./components/Cards";
import { Table } from "./components/Table";

function App() {
  return (
    <div className="bg-[rgba(246, 248, 251, 1)]">
      <Header />
      <Cards />
      <Table />
    </div>
  );
}

export default App;
