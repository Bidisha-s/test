

import Home from "./pages/home/Home";
import Signin from "../src/pages/signin/Signin.jsx"
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar.jsx";


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);



  return (
    <div className="app">
      <BrowserRouter>
        {isAuthenticated ?

          (
            <>
              <Routes>
                <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/signin" />} />
                <Route path="/promotions" element={isAuthenticated ? <List /> : <Navigate to="/signin" />} />
                <Route path="/promotions/:id" element={isAuthenticated ? <Single /> : <Navigate to="/signin" />} />
                <Route path="/promotions/new" element={isAuthenticated ? <New /> : <Navigate to="/signin" />} />

                {/* Public Route (Signin) */}
                <Route path="/signin" element={<Signin onSignin={() => setIsAuthenticated(true)} />} />

                {/* Redirect all other routes */}
                <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/signin"} />} />
              </Routes>
            </>
          ) : (
            <>

            </>
          )} {/* Show Navbar when logged in */}
        <Routes>

          {/* Public Route (Signin) */}
          <Route path="/signin" element={<Signin onSignin={() => setIsAuthenticated(true)} />} />

          {/* Redirect all other routes */}
          <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/signin"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

