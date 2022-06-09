import React from "react";
import { Busqueda } from "../home/Busqueda";

const MisReportesScreen = () => {
  return (
    <>
      <Busqueda />

      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-md justify-content-center">
          <a class="navbar-brand" href="#">
            <h2>Mis Reportes </h2>
          </a>
        </div>
      </nav>

      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
          <div class="container-md justify-content-center">
            <a class="navbar-brand" href="#">
              <h2>Mis Reportes </h2>
            </a>
          </div>
        </nav>

        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <img
                  src="https://www.eluniversal.com.mx/sites/default/files/2021/08/05/baches.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Descripcion del la incidencia</h5>
                  <p class="card-text">
                    Se ha reportado varias veces, que en elcruze hay distintos
                    baches bastants grandes, que incluso con la lluvia genera
                    grandes estancamientos de agua lo cual impide el paso
                    peatonal. Tambien algunos autos se hab visto afectados, los
                    baches ya llevan mucho tiempo aqui y no hemos visto que los
                    reparen.
                  </p>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Tipo de incidencia: Baches</li>
                    <li class="list-group-item">
                      Ubicacion: San Rafael, 06470 Ciudad de México, CDMX Buscar
                      en Google Maps
                    </li>
                    <li class="list-group-item">Estado: Por atender</li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="card-link btn btn-primary">
                      Ver mas
                    </a>
                    <a href="#" class="card-link btn btn-primary">
                      Compartir
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <img
                  src="https://elquintanaroo.mx/wp-content/uploads/2021/11/semaforosSemaforos1-1.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Descripcion de la incidencia</h5>
                  <p class="card-text">
                    Los semaforos del cruze no funcionan correctamente,
                    provoncando accidentes y dificulatades en las vialidades
                    tanto de autos como el cruze peatonal. Espero puedan
                    repararlos lo mas pornto posble antes de que llegue a
                    ocurrir algun accidente grave.
                  </p>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      Tipo de incidencia: Semaforos
                    </li>
                    <li class="list-group-item">
                      Ubicacion: C. Nezahualcóyotl 176, Centro, Cuauhtémoc,
                      06080 Ciudad de México, CDMX Buscar en Google Maps
                    </li>
                    <li class="list-group-item">Estado: Por atender</li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="card-link btn btn-primary">
                      Ver mas
                    </a>
                    <a href="#" class="card-link btn btn-primary">
                      Compartir
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MisReportesScreen;
