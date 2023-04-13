import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Phone from './action/Phone';
import PhoneAdd from './action/PhoneAdd';
import PhoneEdit from './action/PhoneEdit';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Phone/>} />
        <Route path="/phones/:id/edit" element={<PhoneEdit />} />
        <Route path="/phones/create" element={<PhoneAdd/>} /> 
      </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
