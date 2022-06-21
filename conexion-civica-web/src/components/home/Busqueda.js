import React from "react";
import { Link } from "react-router-dom";

export const Busqueda = () => {
  const logo = require.context('../../assets', true);

  return (
    <>
      <nav class="navbar navbar-light justify-content-between nav_buscar">
        <div className="container justify-content-center">
          <Link class="navbar-brand titulo" to='/'>
            <img src={logo('./logoRecortadoSinFondo.png')} alt="logo" className="img-logo" />
          </Link>
          <form class="form-inline buscar">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-map-search"
                width="44"
                height="44"
                viewBox="0 2 24 30"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v10" />
                <path d="M9 4v13" />
                <path d="M15 7v5" />
                <circle cx="16.5" cy="17.5" r="2.5" />
                <path d="M18.5 19.5l2.5 2.5" />
              </svg>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};
