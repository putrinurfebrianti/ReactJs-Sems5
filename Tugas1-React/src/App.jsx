import { BrowserRouter, Route, Routes} from "react-router";
import Home from "./Pages";
import Headphones from "./Pages/headphones";
import Teams from "./Pages/teams";
import Contacts from "./Pages/contacts";
import Login from "./Pages/auth/login";
import Register from "./Pages/auth/register";


function App() {
  
  
  return (
    
    <>
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="headphones" index element={<Headphones />} />
        <Route path="teams" index element={<Teams />} />
        <Route path="contacts" index element={<Contacts />} />
        <Route path="login" index element={<Login />} />
        <Route path="register" index element={<Register />} />
      </Routes>
      </BrowserRouter>
      </div>
    </>
   
    
  );
}


export default App
