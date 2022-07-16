<script>
  import clienteAxios from "../../config/axios";
  import Pencil from 'svelte-material-icons/pencil.svelte';
  import Delete from 'svelte-material-icons/deleteOutline.svelte';
  import Find from 'svelte-material-icons/findReplace.svelte';
  import { onMount } from "svelte";

  let getVehiculo =[]
  let buscador = ''
  let filtro = []
 


  const getVehiculos = () =>{
    clienteAxios.get("/vehiculos")
    .then(res =>{

      getVehiculo = res.data;
    })
    .catch(err =>{
      console.log(err);
    })

  }




  $: filtro = getVehiculo.filter((getVehiculo) =>{
    return getVehiculo.rfid.toLowerCase().includes(buscador.toLocaleLowerCase()) ||
           getVehiculo.placas.toLowerCase().includes(buscador.toLocaleLowerCase()) ||
           getVehiculo.marca.toLowerCase().includes(buscador.toLocaleLowerCase()) ||
           getVehiculo.numeroEconomico.toLowerCase().includes(buscador.toLocaleLowerCase())
  })


onMount(getVehiculos)
</script>

<div class="container">
    <div class="flex items-end justify-between pr-5 ">
      <h1 class="ml-2 text-primary text-4xl font-black">Registrados</h1>
      <ul class="menu bg-primary rounded-b-3xl menu-horizontal shadow-xl text-white">
        <li><a href="/vehiculos/registrar">Registrar</a></li>
        <li><a href="/vehiculos/ver-vehiculos">Registrados</a></li>
        <li><a href="/vehiculos/deshabilitado" >Deshabilitados</a></li>
      </ul>
    </div>
  </div>

    <form  class="form-control w-64 mt-6 pl-2">
      <div>
        <label for="rfid" class=" label ">
          <span class="label-text text-xl">Buscar</span>
          <span class="label-text-alt text-xl"> <Find /> </span>
        </label>

        <div class="mt-1">
          <input bind:value={buscador}  type="text" class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-600" />
        </div>
      </div>
     </form>


<div class="overflow-x-auto mt-5 ml-2">
  <table class="table table-compact w-full">
   
    <thead class="text-white">
      <tr>
        <th class="bg-primary">RFID</th>
        <th class="bg-primary">Placas</th>
        <th class="bg-primary">Marca</th>
        <th class="bg-primary">N/Economico</th>
        <th class="bg-primary">Odometro</th>
        <th class="bg-primary">Descripcion</th>
        <th class="bg-primary">Editar</th>
        <th class="bg-primary">Eliminar</th>
      </tr>
    </thead>
    <tbody>
      {#each filtro as item}
      
      <tr class="hover:bg-blue-100 border-b border-r-2 border-l-2 border-gray-200 ">
        <th>{item.rfid}</th>
        <td> {item.placas} </td>
        <td> {item.marca} </td>
        <td> {item.numeroEconomico} </td>
        <td> {item.odometro} </td>
        <td> {item.descripcion} </td>
        <td>
          
            <a href={`/vehiculos/${item._id}`} class="btn btn-square btn-sm bg-warning border-none hover:bg-yellow-300"> <Pencil /> </a>
       
        </td>
        <td>
          <button class="btn btn-square btn-sm bg-error border-none hover:bg-red-300"> <Delete /> </button>
        </td>
      </tr>
      {/each}
    
    </tbody>

  </table>
</div>


