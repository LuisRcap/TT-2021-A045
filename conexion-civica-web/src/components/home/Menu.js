import React from "react";

const Menu = () => {
  return (
    <nav class="navbar navbar-inverse fixed-top" id="" role="navigation">
      <ul class="nav sidebar-nav">
        <div class="sidebar-header">
          <div class="sidebar-brand">
            <a href="#">Conexion Civica</a>
          </div>
        </div>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-home"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-report-search"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
            <path d="M18 12v-5a2 2 0 0 0 -2 -2h-2" />
            <rect x="8" y="3" width="6" height="4" rx="2" />
            <path d="M8 11h4" />
            <path d="M8 15h3" />
            <circle cx="16.5" cy="17.5" r="2.5" />
            <path d="M18.5 19.5l2.5 2.5" />
          </svg>
          <a href="/user/misReportes">Mis Reportes</a>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-presentation-analytics"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 12v-4" />
            <path d="M15 12v-2" />
            <path d="M12 12v-1" />
            <path d="M3 4h18" />
            <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
            <path d="M12 16v4" />
            <path d="M9 20h6" />
          </svg>
          <a href="#estadisticas">Estadisticas</a>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-message-report"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
            <line x1="12" y1="8" x2="12" y2="11" />
            <line x1="12" y1="14" x2="12" y2="14.01" />
          </svg>
          <a href="/ayuda">Ayuda</a>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-license"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
            <line x1="9" y1="7" x2="13" y2="7" />
            <line x1="9" y1="11" x2="13" y2="11" />
          </svg>
          <a href="#acerca">Acerca de</a>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-phone-pause"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            <line x1="20" y1="3" x2="20" y2="7" />
            <line x1="16" y1="3" x2="16" y2="7" />
          </svg>
          <a href="#contacto">Contacto</a>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-mood-happy"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
            <path d="M8 13a4 4 0 1 0 8 0m0 0h-8" />
          </svg>
          <a href="#blog">Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
