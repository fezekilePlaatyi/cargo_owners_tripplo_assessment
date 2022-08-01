import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import { RootState } from "../store";
import { UserState } from "../types";
import blueLogo from "../assets/img/blue_logo.svg";

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  );
  const { userInfo } = userLogin;
  const email = userInfo ? userInfo.email : null;

  const handleLogoutClick = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div id="navigation_bar" className="navbar navbar-expand-lg shadow">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={blueLogo} alt="Blue Company Logo" />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link "
              aria-current="page"
              href="#"
              id="navbarDarkDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-user"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark nav-dropdown-menu"
              aria-labelledby="navbarDarkDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  {email}
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={handleLogoutClick}
                >
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
