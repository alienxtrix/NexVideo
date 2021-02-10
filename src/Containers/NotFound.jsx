import React from "react";
import notFound from "../assets/static/notFound.jpg";
import "../assets/styles/containers/notFound.scss";

function NotFound() {
  return (
    <React.Fragment>
      <div className="notFound__container">
        <img
          src={notFound}
          alt="Página no encontrada"
          className="img__notFound"
        />
      </div>
    </React.Fragment>
  );
}

export default NotFound;
