let user = JSON.parse(localStorage.getItem("datosUsuario"));
let { nombre } = user;
let body = document.getElementById("body");

body.innerHTML = `
<nav class="d-inline">
<a href="main.html"><img
                src="https://cdn-icons-png.flaticon.com/512/69/69524.png"
                alt="Imagen de home" class="m-5" style="width: 5%" id="imgHome"></a>        
<a href="../login.html">
            <img
                src="https:cdn-icons.flaticon.com/png/512/552/premium/552721.png?token=exp=1649171319~hmac=303cf82a45a0124dc8803f6662d823e1"
                alt="Imagen de logo" class="m-5" style="width: 5%; float: right;" id="imgLogo">
        </a>
        
                
    </nav>

    <h1 class="text-center mb-3">${nombre}, por favor ingresa la placa del vehículo</h1>

    <div class="form-floating mb-3 w-25 mx-auto">
        <input type="text" class="form-control" id="placaNew" placeholder="PWI349" required maxlength="6">
        <label for="floatingInput">Placa</label>
    </div>
    <input class="btn btn-primary mt-3 w-25 mx-auto fs-5" type="submit" value="Buscar">
    <form class="w-50 mt-5 mx-auto mb-3 d-flex flex-column" id="form">
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
        </select>
        <div class="form-floating mb-3">
            <input type="number" class="form-control" id="lastname" placeholder="Gamboa Villegas" required
                maxlength="10">
            <label for="floatingInput">Número del Módelo</label>
        </div>
        <div class="form-floating mb-3">
            <input type="date" class="form-control" id="email" placeholder="19/04/2005" required>
            <label for="floatingInput">Fecha vencimiento del seguro</label>
        </div>
        <div class="form-floating mb-3">
            <input type="date" class="form-control" id="email" placeholder="19/04/2005" required>
            <label for="floatingInput">Fecha vencimiento de la técno mecánica</label>
        </div>
        <input class="btn btn-primary mt-3 w-50 mx-auto fs-5" type="submit" value="Actualizar">
    </form>
`;
