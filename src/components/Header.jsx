import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutRequest } from "../actions";
import "../assets/styles/components/header.scss";
import Logo from "../assets/static/Kooper2.png";
import UserIcon from "../assets/static/user-icon.png";

const Header = (props) => {
  const { user } = props;
  console.log(user);
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    console.log("logout");
    props.logoutRequest(user);
    console.log("user logout: ", user);
  };
  // console.log(hasUser);
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={Logo} alt="Nex Video" />
      </Link>

      {hasUser ? (
        <>
          <div className="header__menu">
            <div className="header__menu--profile">
              <img src={UserIcon} alt="" />
              <p>{user.name}</p>
            </div>
            <ul>
              <li>
                <a href="/">Cuenta</a>
              </li>
              <li>
                <Link onClick={handleLogout} to="/login">
                  Cerrar Sesión
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchTOProps = {
  logoutRequest,
};
// export default Header;
export default connect(mapStateToProps, mapDispatchTOProps)(Header);
