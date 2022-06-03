import React from "react";
import { Busqueda } from "../home/Busqueda";

const MisReportesScreen = () => {
  return (
    <>
      <Busqueda />

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-md">
          <a class="navbar-brand" href="#">
            Mis Reportes
          </a>
        </div>
      </nav>

      <div class="container">
        <div class="card">
          <div class="card-header">Tipo de Reporte: Baches en vialidades</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
            <img src="..." class="card-img-top" alt="..."/>
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </div>

        <table class="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MisReportesScreen;
