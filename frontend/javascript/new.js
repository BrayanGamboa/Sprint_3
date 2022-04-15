let body = document.getElementById("body")

let user = JSON.parse(localStorage.getItem("datosUsuario"));

let {nombre} = user

body.innerHTML= `
<nav class="d-inline">
<a href="main.html"><img src="../img/casa-icono-silueta.png" alt="Imagen de home" class="m-5" style="width: 5%"
        id="imgHome"></a>
<a href="../login.html">
    <img src="../img/account.png" alt="Imagen de logo" class="m-5" style="width: 5%; float: right;"
        id="imgLogo">
</a>
</nav>
   <form class="w-50 mx-auto mb-3 d-flex flex-column" id="form">
     <h1 class="text-center mb-5">${nombre}, ahora podemos registrar un auto nuevo </h1>
     <div class="form-floating mb-3">
       <input type="text" class="form-control" id="placaNew" placeholder="PWI349" required maxlength="6">
       <label for="floatingInput">Placa</label>
     </div>
     <div class="form-floating mb-3">
     <input type="url" class="form-control" id="urlImage" placeholder="https:" required>
     <label for="floatingInput">URL de la imagen</label>
   </div>
     <select class="form-select mb-3 p-3" aria-label="Default select example">
       <option selected>Marca</option>
       <option value="1">Mazda</option>
       <option value="2">Toyota</option>
       <option value="3">Chevrolet</option>
       <option value="4">Suzuki</option>
       <option value="5">Volkswagen</option>
       <option value="6">Audi</option>
       <option value="7">BMW</option>
       <option value="8">Ford</option>
       <option value="9">Mercedes-Benz</option>
       <option value="10">Tesla</option>
     </select>
     <div class="form-floating mb-3">
       <input type="date" class="form-control" id="modelo" placeholder="Gamboa 19/04/2005" required>
       <label for="floatingInput">Módelo</label>
     </div>
     <div class="form-floating mb-3">
       <input type="date" class="form-control" id="email" placeholder="19/04/2005" required>
       <label for="floatingInput">Fecha vencimiento del seguro</label>
     </div>
     <div class="form-floating mb-3">
       <input type="date" class="form-control" id="email" placeholder="19/04/2005" required>
       <label for="floatingInput">Fecha vencimiento de la técno mecánica</label>
     </div>
     <input class="btn btn-primary mt-3 w-50 mx-auto fs-5" type="submit" value="Crear">
   </form>
 `

