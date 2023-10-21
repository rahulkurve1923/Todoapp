import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login  from './component/Login';
import Singup from './component/SingUp';
import List from './component/List';
import ErrorPage from "./component/ErrorPaage";
import './App.css';

function App() {
 
  return (

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="Signup" element={<Singup />} />
          <Route path="List" element={<List />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
  
}

export default App;
