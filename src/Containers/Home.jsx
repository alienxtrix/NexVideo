import React, { useState, useEffect } from "react";
//5.-Importamos el "connect" para conectar la data con la aplicación
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/app.scss";

//8.-En el componente Home se traen por medio de props los elementos del objeto que se necesitan.
const Home = ({ myList, trends, originals, user }) => {
  //Ejemplo con react hooks
  //const initialState = useInitialState(API);
  console.log({ myList });
  console.log({ user });
  return (
    <div>
      <Search />
      {myList.length > 0 && (
        <>
          <Categories name="Mi Lista" />
          <Carousel>
            {myList.map((item) => (
              <CarouselItem isTrue key={item.id} {...item} />
            ))}
          </Carousel>
        </>
      )}

      <Categories name="Tendencias" />
      <Carousel>
        {trends.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>

      <Categories name="Originales de Kooper" />
      <Carousel>
        {originals.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
    </div>
  );
};

// export default Home;

//7.Crear la funcion mapStateToProps y se van a retornar cada uno de los elementos que necesito del estado(Solo retornar los elementos que se necesitan)
console.log(mapStateToProps);
const mapStateToProps = (state) => {
  console.log(state);
  console.log(state.myList);
  console.log(state.user);
  return {
    user: state.user,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

//6.-Exportamos el connect el primer parentesis recibe como parametro mapStateToProps("Se pasa lo que hay en el estado a propiedades que va a utilizar el documento"),
//el segundo parametro que recibe son las actions("nos permite mapear las acciones"). El segundo parentesis le pasamos el contenedor, en este caso es Home.
export default connect(mapStateToProps, null)(Home);
