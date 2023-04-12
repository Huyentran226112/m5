import Post from "./components/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;