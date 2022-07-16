<script>
  import clienteAxios from '../../config/axios';
  import Swal from 'sweetalert2/dist/sweetalert2.all';

  let vehiculo = {
    rfid: '',
    placas: '',
    marca: '',
    modelo: '',
    numeroEconomico: '',
    odometro: 0,
    descripcion: '',
  }

  const onSubmitHandler = e =>{
    e.preventDefault
    clienteAxios.post('/vehiculos', vehiculo)
    .then(res =>{
      if (res.data.code === 11000) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El vehiculo ya existe!',
        })
      } else {
        Swal.fire(
         {
          icon: 'success',
          title: 'Exito!',
         text: 'Vehiculo registrado con exito!',
        }
        )
      }
    })

    cleanForm()
  }

  const cleanForm = () => {
    vehiculo = {
    rfid: '',
    placas: '',
    marca: '',
    modelo: '',
    numeroEconomico: '',
    odometro: 0,
    descripcion: '',
  }
  }

</script>




<div class="container  bg-accent h-52 z-10">
    <div class="flex items-end justify-between pr-5 ">
      <h1 class="ml-5 text-primary text-4xl font-black">Registrar</h1>
      <ul class="menu bg-primary rounded-b-3xl menu-horizontal shadow-xl text-white">
        <li><a href="/vehiculos/registrar">Registrar</a></li>
        <li><a href="/vehiculos/ver-vehiculos">Registrados</a></li>
        <li><a href="/vehiculos/deshabilitado">Deshabilitados</a></li>
      </ul>
    </div>
    <div class="mt-16 ml-5 mr-5">
      <div class=" bg-white py-8 px-6 shadow-xl rounded-lg sm:px-10">
        <form on:submit={onSubmitHandler} class=" grid grid-cols-2 gap-4 mb-0">
          <div>
            <label for="rfid" class="block text-sm font-medium text-gray-700">RFID</label>
            <div class="mt-1">
              <input bind:value={vehiculo.rfid} type="text" class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-600" />
            </div>
          </div>
    
          <div>
            <label for="placas" class="block text-sm font-medium text-gray-700">Placas</label>
            <div class="mt-1">
              <input bind:value={vehiculo.placas} type="text" class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-600" />
            </div>
          </div>

          <div>
            <label for="modelo" class="block text-sm font-medium text-gray-700">Modelo</label>
            <div class="mt-1">
              <input bind:value={vehiculo.modelo} type="text" class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-600" />
            </div>
          </div>

          <div>
            <label for="marca" class="block text-sm font-medium text-gray-700">Marca</label>
            <div class="mt-1">
              <input bind:value={vehiculo.marca} type="text" class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-600" />
            </div>
          </div>

          <div>
            <label for="numeroEconomico" class="block text-sm font-medium text-gray-700">Numero Economico</label>
            <div class="mt-1">
              <input bind:value={vehiculo.numeroEconomico} type="text" class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-600" />
            </div>
          </div>

          <div>
            <label for="odometro" class="block text-sm font-medium text-gray-700">Odometro</label>
            <div class="mt-1">
              <input bind:value={vehiculo.odometro} placeholder="Kms" type="number" class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-600" />
            </div>
          </div>

          <div class="col-span-2">
            <label for="descripcion" class="block text-sm font-medium text-gray-700">Descripcion</label>
            <div class="mt-1">
              <input bind:value={vehiculo.descripcion} type="email" class="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-600" />
            </div>
          </div>

        </form>
        <div class="mt-4">
          <button on:click={onSubmitHandler} type="submit" class="btn btn-block btn-primary">Guardar</button>
        </div>
        
      </div>
    </div>
  </div>
  
  

