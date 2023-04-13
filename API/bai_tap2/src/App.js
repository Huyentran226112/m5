import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Users from "./action/Users";
import UserAdd from "./action/UserAdd";
import UserEdit from "./action/UserEdit";

function App() {
  return ( 
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users/>} />
            <Route path="/books/:id/edit" element={<UserEdit />} />
            <Route path="/books/create" element={<UserAdd/>} /> 
          </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;