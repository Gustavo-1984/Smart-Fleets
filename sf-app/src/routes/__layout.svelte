<script>
  import '../app.css';
  import TruckCheck from "svelte-material-icons/truckCheck.svelte";
  import GasStation from "svelte-material-icons/gasStation.svelte";
  import CurrencyUsd from "svelte-material-icons/currencyUsd.svelte";
  import BeakerAlert from "svelte-material-icons/beakerOutline.svelte";
  import Cog from "svelte-material-icons/cogs.svelte";
  import Blur from "svelte-material-icons/blur.svelte";
  


let size = "25px"
</script>

<div class="md:flex md:min-h-screen">
  <div class="md:w-80 bg-primary px-5 py-10">
    <h2 class="text-4xl font-black text-center text-white">Smart-Fleets</h2>
    <div class="divider border-white"></div>
    <nav class="mt-12">
      <a class="text-white text-lg mt-6 hover:text-blue-300 flex justify-start pl-5 items-end" href="/">  
        <div class="icon flex justify-start items-end mr-4"><Blur size={size}/></div>Dashboard</a>

        <a class="text-white text-lg mt-6 hover:text-blue-300 flex justify-start pl-5 items-end" href="/vehiculos/ver-vehiculos">  
          <div class="icon flex justify-start items-end mr-4"><TruckCheck size={size}/></div>Vehiculos</a>

          <a class="text-white text-lg mt-6 hover:text-blue-300 flex justify-start pl-5 items-end" href="/transacciones/reportes">  
            <div class="icon flex justify-start items-end mr-4"><GasStation size={size}/></div>Transacciones</a>

            <a class="text-white text-lg mt-6 hover:text-blue-300 flex justify-start pl-5 items-end" href="/">  
              <div class="icon flex justify-start items-end mr-4"><CurrencyUsd size={size}/></div>Fijar Precio</a>

              <a class="text-white text-lg mt-6 hover:text-blue-300 flex justify-start pl-5 items-end" href="/">  
                <div class="icon flex justify-start items-end mr-4"><BeakerAlert size={size}/></div>Inventarios</a>

                <a class="text-white text-lg mt-6 hover:text-blue-300 flex justify-start pl-5 items-end" href="/">  
                  <div class="icon flex justify-start items-end mr-4"><Cog size={size}/></div>Configuraciones</a>
    </nav>
  </div>
  
  <div class="md:w-3/4">
    <slot />
  </div>
 
</div>

  


<style>
  .icon{
    color: rgb(255, 255, 255);
   padding-top: 10px;
  }
</style>

