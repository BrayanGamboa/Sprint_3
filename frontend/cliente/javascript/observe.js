let container = document.getElementById("container")
let user = JSON.parse(localStorage.getItem("datosUsuario"));
let {nombre} = user

container.innerHTML += `
<h1 class="text-center mb-5">${nombre}, estos son los autos guardados</h1>

<div class="row row-cols-md-2 g-2 mx-auto w-100" id="garajeAutos">
<div class="card h-100 m-3" style="max-width: 45%;">
<div class="row g-0">
    <div class="col-md-4 mx-auto d-flex">
        <img src="https://www.elcarrocolombiano.com/wp-content/uploads/2019/04/20190409-TESLA-MODEL-X-Y-TESLA-MODEL-3-EN-COLOMBIA-02.jpg" class="img-fluid rounded-start mx-auto w-100 d-flex mt-auto mb-auto" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">HTM567</h5>
            <ul>
            <li class="mb-2"><b>Marca:</b> Tesla</li>
            <li class="mb-2"><b>Número del módelo:</b> 730875908375</li>
            <li class="mb-2"><b>Fecha vencimiento del seguro:</b>24/30/3939</li>
            <li class="mb-2"><b>Fecha vencimiento de la técno mecánica:</b> 24/30/3939</li>
        </ul>
        </div>
    </div>
</div>
</div>
</div>
`