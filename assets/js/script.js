//Funcion constructora de perfil

function Perfil(nombre, correo, trabajo, telefono, sobre) {
    let _nombre = nombre;
    let _correo = correo;
    let _trabajo = trabajo;
    let _telefono = telefono;
    let _sobre = sobre;

    Object.defineProperties(this, {
        nombre: {
            get: function () {
                return _nombre
            }
        },
        correo: {
            get: function () {
                return _correo;
            }
        },
        trabajo: {
            get: function () {
                return _trabajo;
            }
        },
        telefono: {
            get: function () {
                return _telefono;
            }
        },
        sobre: {
            get: function () {
                return _sobre;
            }
        }
    })
}

//Prevenir default de form y capturar la info ingresada, meterla a un objeto perfil y luego insertar esa info en el html
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let trabajo = document.getElementById("trabajo").value;
    let telefono = document.getElementById("telefono").value;
    let sobre = document.getElementById("sobre").value;

    let perfil1 = new Perfil(nombre, correo, trabajo, telefono, sobre);

    console.log(perfil1);
    let contenedor = document.getElementById("tarjetaPerfil")
    let contenido = `<div
    class="col-4 perfil d-flex align-items-center justify-content-evenly flex-column text-white"
  >
    <img
      src="/assets/img/usericon.png"
      alt=""
      width="100"
      height="100"
      class="mt-5 mb-5"
    />
    <h4>
      <strong>${perfil1.nombre}</strong>
    </h4>
    <h4>${perfil1.trabajo}</h4>
  </div>
  <div class="col-8 descripcion text-start p-4">
    <h5 class="mb-4">Información</h5>
    <div class="row mb-3">
      <div class="col-6">
        <p class="fs-5">Email</p>
        <p class="text-secondary fw-semibold">${perfil1.correo}</p>
      </div>
      <div class="col-6">
        <p class="fs-5">Phone</p>
        <p class="text-secondary fw-semibold">${perfil1.telefono}</p>
      </div>
    </div>
    <h5>Sobre Mi</h5>
    <p class="text-secondary fw-semibold">
    ${perfil1.sobre}
    </p>
  </div>`
    //INSERTAR INFO AL HTML
    contenedor.innerHTML = contenido;

})