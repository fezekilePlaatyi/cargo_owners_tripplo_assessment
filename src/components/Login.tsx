import { SyntheticEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/userAction";
import { RootState } from "../store";
import { UserState } from "../types";
import whiteLogo from "../assets/img/white_logo.svg";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  );
  const { userInfo, loading, error } = userLogin;

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (userInfo != undefined && userInfo.email) navigate("/");
  }, [userInfo, navigate]);

  return (
    <>
      <div id="login_page">
        <div className="left-side">
          <div className="content">
            <img src={whiteLogo} alt="White Company Logo" />
            <h4>Make trips as efficient and profitable as possible.</h4>
            <a
              href="https://www.tripplo.co/transporters"
              className="main-btn shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
            <div className="paths-container">
              <div className="path1">
                <div className="path2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-side">
          <form action="#" method="post">
            <p className="error-message">
              {error !== undefined && error !== null ? error : ""}
            </p>
            <div className="header-part">
              <h2>Let's log you in.</h2>
              <h3>Welcome back.</h3>
            </div>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button onClick={submitHandler} className="main-btn shadow-sm">
              Login
            </button>
            <p> {loading ? "Loading..." : ""}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
