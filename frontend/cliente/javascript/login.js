let form = document.getElementById("form");



function capDatos() {
  let nameU = document.getElementById("name").value;
  let lastnameU = document.getElementById("lastname").value;
  let emailU = document.getElementById("email").value;
  let contraseña = document.getElementById("password").value;
  let user = {"nombre": nameU, "apellidos": lastnameU, "email": emailU, "password": contraseña}
  localStorage.setItem("datosUsuario", JSON.stringify(user));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  capDatos()
  window.location.href = "html/main.html"
});

form.innerHTML = `
            <h1 class="text-center mb-5">Registro de usuario</h1>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="name" placeholder="Brayan" required>
                <label for="floatingInput">Nombre</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="lastname" placeholder="Gamboa Villegas" required>
                <label for="floatingInput">Apellidos</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="email" placeholder="name@example.com" required>
                <label for="floatingInput">Correo Electrónico</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="password" placeholder="Password" required>
                <label for="floatingPassword">Contraseña</label>
            </div>
            <input class="btn btn-primary mt-3 w-50 mx-auto" type="submit" value="Registrar" id="enviarDatos">
`;