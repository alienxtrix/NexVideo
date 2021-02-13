import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addUser } from "../actions";
import "../assets/styles/containers/register.scss";

function Register(props) {
  const [form, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  console.log(props.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Antes: ", form);
    console.log("props: ", props);
    props.addUser(form);
    props.history.push("/");
  };
  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            name="name"
            className="input__register"
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
          />
          <input
            name="email"
            className="input__register"
            type="text"
            placeholder="Correo"
            onChange={handleChange}
          />
          <input
            name="password"
            className="input__register"
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
          />
          <button className="button__register">Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  );
}
const mapDispatchToProps = {
  addUser,
};
// export default Register;
export default connect(null, mapDispatchToProps)(Register);
