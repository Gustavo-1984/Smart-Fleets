<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto/auto.esm";

  function crearGrafica() {
    const ctx = document.getElementById("grafica").getContext("2d");
    let chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
        ],
        datasets: [
          {
            label: "Ventas",
            fill: false,
            tension: 0.2,
            data: [12, 19, 6, 5, 10, 3, 20, 3, 5, 6, 3, 20],
            backgroundColor: ["blue"],
            borderColor: ["blue"],

            borderWidth: 2,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        onClick: function (evt, item) {
          console.log(item);
        },
      },
    });
  }

  onMount(crearGrafica);
</script>

<div class="container bg-accent h-64 z-10 ">
  <div class="flex items-end justify-between pr-5">
    <h1 class="ml-5 text-primary text-4xl font-black">Dashboard</h1>
    <ul class="menu bg-primary rounded-b-3xl menu-horizontal  text-white">
      <li><p>20-marzo-2022</p></li>
      <li><p>Transportistas unidos</p></li>
      <li><a href="/">Salir</a></li>
    </ul>
  </div>

  <div class="grid grid-flow-col gap-2 p-5 mt-5">
    <div class=" stats w-72 shadow-2xl">
      <div class="stat">
        <div class="stat-figure">
          <img src="../../static/gas-station.png" alt="" />
        </div>
        <div class="stat-title text-blue-600">Total de Cargas</div>
        <div class="stat-value text-accent">89,400</div>
        <div class="stat-desc">21% more than last month</div>
      </div>
    </div>
    <div class="shadow-2xl stats w-72">
      <div class="stat">
        <div class="stat-figure">
          <img src="../../static/tank-truck.png" alt="" />
        </div>
        <div class="stat-title  text-blue-600">Total de Descargas</div>
        <div class="stat-value text-error">89,400</div>
        <div class="stat-desc">21% more than last month</div>
      </div>
    </div>
    <div class=" stats w-96 h-64 shadow-2xl">
      <div class="stat">
        <div class="stat-title  text-blue-600">Inventario</div>
        <div
          class="radial-progress stat-value ml-24 text-primary "
          style="--value:50; --size:8rem; --thickness: 1rem;"
        >
          50%
        </div>
        <div class="stat-desc">Nivel aproximado de inventario</div>
      </div>
    </div>
  </div>
  <div class="grid grid-flow-col w-auto h-72 pl-5 pr-5">
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <canvas width="1" id="grafica" />
      </div>
    </div>
  </div>
</div>
