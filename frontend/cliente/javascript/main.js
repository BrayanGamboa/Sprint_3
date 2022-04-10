let editarAuto = document.getElementById("editarAuto");
let observarAutos = document.getElementById("observarAutos");
let crearAuto = document.getElementById("crearAuto");
let body = document.getElementById("body");

let user = JSON.parse(localStorage.getItem("datosUsuario"));
let { nombre } = user;
init()
function init(){
body.innerHTML = `
<nav class="d-inline">
<a href="main.html"><img src="https://cdn-icons-png.flaticon.com/512/69/69524.png" alt="Imagen de home"
        class="m-5" style="width: 5%" id="imgHome"></a>
<a href="../login.html">
    <img src="https:cdn-icons.flaticon.com/png/512/552/premium/552721.png?token=exp=1649171319~hmac=303cf82a45a0124dc8803f6662d823e1"
        alt="Imagen de logo" class="m-5" style="width: 5%; float: right;" id="imgLogo">
</a>
</nav>
    <h1 class="text-center mb-5">${nombre}, ¿qué realizaremos hoy? </h1>
    <div class="w-75 mx-auto mb-2">

        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div class="card">
                    <img src="https://cdn-icons-png.flaticon.com/512/2137/2137887.png"
                        class="card-img-top w-25 mx-auto mt-3" alt="...">
                    <div class="card-body d-flex flex-column">
                        <h2 class="card-title mx-auto">Crear un nuevo auto</h2>
                        <p class="card-text mx-auto text-center">Los cambios o creaciones se verá reflejado en el apartado de "Observa los autos".</p>
                        <a href="new.html" class="d-flex">
                        <input class="btn btn-primary mt-3 w-50  mx-auto fs-5" type="submit" value="Registrar"
                            id="crearAuto">
                            </a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="https://cdn-icons.flaticon.com/png/512/4479/premium/4479642.png?token=exp=1649223058~hmac=100c59fadf45b6b1587dd17641fe921f"
                        class="card-img-top w-25 mx-auto mt-3" alt="...">
                    <div class="card-body d-flex flex-column">
                        <h2 class="card-title mx-auto">Editar un auto existente</h2>
                        <p class="card-text mx-auto text-center">Editaremos los autos que se encuentren en el
                            "inventario" o garaje.</p>
                            <a href="edit.html" class="d-flex">
                            <input class="btn btn-primary mt-3 w-50  mx-auto fs-5" type="submit" value="Editar" id="editarAuto">
                            </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col w-50 mt-4 mx-auto">
            <div class="card">
                <img src="https://cdn-icons.flaticon.com/png/512/4955/premium/4955440.png?token=exp=1649224199~hmac=8d3ee9aa908fc0cef6cf08f0a89fa4b5"
                    class="card-img-top w-25 mx-auto mt-3" alt="...">
                <div class="card-body d-flex flex-column">
                    <h2 class="card-title mx-auto">Observa los autos</h2>
                    <p class="card-text mx-auto text-center">En este apartado podrás ver todos los cambios que hemos
                        hecho hasta el momento.</p>
                        <a href="observe.html" class="d-flex">
                        <input class="btn btn-primary mt-3 w-50  mx-auto fs-5" type="submit" value="Observar" id="observarAutos">
                        </a>

                </div>
            </div>
        </div>
    </div>
    <br><br>
`;
    
}