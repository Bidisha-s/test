

import Home from "./pages/home/Home";
import Signin from "../src/pages/signin/Signin.jsx"
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect,useState } from "react";


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);



  return (
    <div className={
      "app"}>
        
      <BrowserRouter>
        <Routes>
          
          {/* <Route path="/"> */}
          
            <Route path = "/"index element={<Home />} />
            <Route path="/signin" element={<Signin onSignin={()=> setIsAuthenticated(true)} />} />
            <Route path="/promotions">
              <Route index element={<List />} />
              <Route path=":id" element={<Single />} />
              
              <Route
                path="new"
                element={<New />}
              />
            </Route>
            
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

