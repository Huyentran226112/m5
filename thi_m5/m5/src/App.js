import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
// import './App.css';
import ProductAdd from './action/ProductAdd';
import ProductEdit from './action/ProductEdit';
import ProductIndex from './action/ProductIndex';
import ProductShow from "./action/ProductShow";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductIndex/>} />
        <Route path="/Product/:id/edit" element={<ProductEdit />} />
        <Route path="/Product/create" element={<ProductAdd/>} /> 
        <Route path="/Product/:id" element={<ProductShow/>} /> 
      </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
