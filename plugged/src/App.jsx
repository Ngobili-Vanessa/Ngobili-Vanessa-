import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from "./component/Signup";
import './component/Signup.css';
import Signin from "./component/Signin";
import './component/Signin.css';
import Home from "./component/Home";
import './component/Home.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
