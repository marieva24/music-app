window.addEventListener("load", paginaCargada);

function paginaCargada(){
	// DOM para la búsqueda
	const formulario = document.getElementById("formulario");
	formulario.addEventListener("submit", buscar);
	console.log(formulario);
}
function buscar(evento){
    // console.log(evento);
    event.preventDefault();
    // guardamos la 
    const form = new FormData(this);
    const busqueda = form.get("input");
    const url = "https://api.jikan.moe/v3";

    fetch(`${url}/search/anime?q=${busqueda}&page=1`)
    .then(response=>response.json())
    .then(datos)
    .catch(error=>console.warn(error.message));
}
 function datos(info){
 	//console.log(info.results);
 	const resultadoDeBusqueda = document.getElementById("result");
 	// para crear un nuevo array con los datos y pegarles en el html para eso usamos map
 	//Input de busqueda, para buscar un artista. El valor ingresado le pega a la API proporcionada arriba. 
 	//El resultado se presenta en el content area.
 	//Datos a mostrar: Biografia, una foto del grupo, genero musical, website, redes sociales.
 	//Example - theaudiodb.com/api/v1/json/1/search.php?s=coldplay
 	//url:   theaudiodb.com/api/v1/json/1
 	///search.php?s=coldplay

 	//search.php?s={Artist name}      
 	//artist.php?i={artistid}

 	resultadoDeBusqueda.innerHTML = info.results.map(elAnime=>{
 		return ` 
 			<img src="${elAnime.image_url}" />
 			<p>${elAnime.title}</p>
 			<p>${elAnime.synopsis}</p>
 			<p>${elAnime.score}</p>
 			<a href="${elAnime.url}">Link a la página</a>
 		`
 		/*
 		<article class="prodcard h-100 card col-12 col-sm-5 col-md-4 col-lg-3 p-0 shadow bg-bg3 rounded m-2">
                    <div class="card-body d-flex align-content-stretch flex-wrap shadow-sm p-3 bg-white rounded pb-4 m-auto">
                        <h2 class="h3 card-title py-1"><?= $producto['nombre'];?></h2>
                        <p class="card-text text-wrap py-1"><?= $producto['descripcion'];?></p>
                        <p class="font-weight-bold h5 card-text py-3 "><?= $producto['precio'];?></p>
                        <a href="index.php?s=productos-detalles&id=<?= $producto['producto_id'];?>" class="col-12 m-auto text-center d-block btn btn-primary btn-lg botton-card">Ver detalles</a>
                    </div>
                    <img class="align-baseline d-block w-100 img-fluid" src="<?= 'img/' . $producto['imagen'];?>" alt="<?= $producto['imagen_descripcion'];?>">

                </article>
 		*/
 	})
 }





