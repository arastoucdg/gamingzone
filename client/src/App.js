import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import ListUsers from "./pages/ListUsers";
import ShoppingCart from "./context/shoppingCart";
import ProtectedRoute from "./components/Common/ProtectedRoute";
import Header from "./components/Partials/Header";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Home from "./pages/home/index";

export const AppContext = createContext({
  username: "",
  loggedIn: true,
  handleLogin: () => {},
});

function App() {
  const loginSession = JSON.parse(sessionStorage.getItem("login")) || {
    username: "",
    loggedIn: false,
  };

  const [state, setState] = useState([]);
  const [username, setUsername] = useState(loginSession["username"]);
  const [loggedIn, setLoggedIn] = useState(loginSession["loggedIn"]);

  const handleLogin = (_username) => {
    if (_username) {
      setUsername(_username);
      setLoggedIn(true);
    } else {
      setUsername("");
      setLoggedIn(false);
    }
  };

  const [items, setItems] = useState(sessionStorage.getItem("items") || []);

  const addItemToCart = (addItem) => {
    const newArray = [...items, addItem];
    // newArray.push(addItem);
    setItems(newArray);
    // sessionStorage.setItem("items", JSON.stringify(newArray));
  };

  useEffect(() => {
    sessionStorage.setItem(
      "login",
      JSON.stringify({ username: username, loggedIn: loggedIn })
    );
  }, [username, loggedIn]);

  useEffect(() => {}, []);

  return (
    <AppContext.Provider
      value={{
        username,
        loggedIn,
        handleLogin,
        addItemToCart,
        items,
        state,
        setState,
      }}
    >
      <ShoppingCart>
        <div className='App'>
          <BrowserRouter>
            <Header loggedIn={loggedIn} />
            {/* <Navigation /> */}
            {/* {loggedIn ? <Greeting /> : null} */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/list-users' element={<ListUsers />} />
              <Route
                path='/profile'
                element={
                  <ProtectedRoute auth={loggedIn}>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </ShoppingCart>
    </AppContext.Provider>
  );
}

export default App;
