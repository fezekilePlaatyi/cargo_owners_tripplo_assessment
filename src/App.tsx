import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { UserState } from "./types";

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  );

  const isLogin = userLogin.userInfo && userLogin.userInfo.email ? true : false;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={!isLogin ? <Navigate to="/login" /> : <Home />}
        />

        <Route
          path="/login"
          element={isLogin ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
