import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/containers/login.scss";
import { loginRequest } from "../actions";

function Login(props) {
  const [form, setValues] = useState({
    email: "",
  });

  const handleInput = (e) => {
    console.log(form);

    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });

    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginRequest(form);
    props.history.push("/");
  };

  return (
    <React.Fragment>
      <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              name="email"
              className="input__mail"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              name="password"
              className="input__mail"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
            <button className="button">Iniciar sesión</button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" />
                Recuérdame
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img src="../assets/google-icon.png" /> Inicia sesión con Google
            </div>
            <div>
              <img src="../assets/twitter-icon.png" /> Inicia sesión con Twitter
            </div>
          </section>
          <p className="login__container--register">
            No tienes ninguna cuenta <Link to="/register">Regístrate</Link>
          </p>
        </section>
      </section>
    </React.Fragment>
  );
}

const mapDispatchTOProps = {
  loginRequest,
};
// export default Login;
export default connect(null, mapDispatchTOProps)(Login);
