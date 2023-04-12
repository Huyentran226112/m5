import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User";
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;