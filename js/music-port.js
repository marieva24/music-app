window.addEventListener("load", paginaCargada);

function paginaCargada(){
	// DOM para la búsqueda
	const formulario = document.getElementById("formulario");
	formulario.addEventListener("submit", buscar);
	console.log(formulario);
}
function buscar(evento){
    // console.log(evento);
    evento.preventDefault();
    // guardamos la 
    const form = new FormData(this);
   // const busqueda = form.get("input");
    const busqueda = document.getElementById("input").value;
    console.log(busqueda);
    const url = "https://www.theaudiodb.com/api/v1/json/1/search.php?s=" + busqueda;

    fetch(`${url}`)
    .then(response=>response.json())
    .then(datos)
    .catch(error=>console.warn(error.message));
}
 function datos(info){
     console.log(info.artists[0].strBiographyES);
 	//console.log(info.results);
 	const resultadoDeBusqueda = document.getElementById("result");
     console.log(resultadoDeBusqueda);
    //const { strBiographyES } = info.artists;
 	// para crear un nuevo array con los datos y pegarles en el html para eso usamos map
 	//Input de busqueda, para buscar un artista. El valor ingresado le pega a la API proporcionada arriba. 
 	//El resultado se presenta en el content area.
 	//Datos a mostrar: 
     // Biografia     strBiographyES" , una foto del grupo  ????  "strArtistBanner", 
     //genero musical ??? "strGenre" , website  "strWebsite", redes sociales   "strFacebook"   "strTwitter".
 	//Example - theaudiodb.com/api/v1/json/1/search.php?s=coldplay
 	//url:   theaudiodb.com/api/v1/json/1
 	///search.php?s=coldplay

 	//search.php?s={Artist name}      
 	//artist.php?i={artistid}

 	//resultadoDeBusqueda.innerHTML = info.artists[0].strArtist
     const name = document.getElementById("name");
     const foto = document.getElementById("foto");
     const genre = document.getElementById("genre");
     const bio = document.getElementById("bio");
     const web = document.getElementById("web");
     const fb = document.getElementById("fb");
     const tw = document.getElementById("tw");

     name.innerHTML = info.artists[0].strArtist;
     //foto.innerHTML = info.artists[0].strArtistBanner;
     foto.alt = info.artists[0].strArtistBanner;
     foto.src = info.artists[0].strArtistBanner;
     genre.innerHTML = info.artists[0].strGenre;
     bio.innerHTML = info.artists[0].strBiographyES;
     web.href = info.artists[0].strWebsite;
     web.innerHTML = info.artists[0].strWebsite;
     fb.href = info.artists[0].strFacebook;
     fb.innerHTML = info.artists[0].strFacebook;
     tw.href = info.artists[0].strTwitter;
     tw.innerHTML = info.artists[0].strTwitter;

 }





