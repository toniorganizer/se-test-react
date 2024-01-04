import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./component/Home";
import Data from "./component/Data";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
        </Routes>
        <ToastContainer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
