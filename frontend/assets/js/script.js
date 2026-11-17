

// backend. reemplazar por la URL de tu backend
const URL_API = "http://localhost:3000/api/razas";
// const URL_API = "https://REEMPLAZAR-POR-TU-BACKEND.onrender.com/api/razas";

// Listado de fotos de cada raza.
const FOTOS = {
  "Abyssinian": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Abessinierkater1.jpg/960px-Abessinierkater1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "American Bobtail": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/American_bobtail_2.jpg/960px-American_bobtail_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "American Curl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/American_curl_2.jpg/960px-American_curl_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "American Shorthair": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Black_tabby_American_Shorthair_cat_head.jpg/960px-Black_tabby_American_Shorthair_cat_head.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "American Wirehair": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/American_Wirehair_-_CFF_cat_show_Heinola_2008-05-04_IMG_8721.JPG/960px-American_Wirehair_-_CFF_cat_show_Heinola_2008-05-04_IMG_8721.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "Balinese": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Chocolate-point-balinese.jpg/960px-Chocolate-point-balinese.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "Bambino": "https://static.wikia.nocookie.net/cats/images/5/51/Bambino.jpg/revision/latest/scale-to-width-down/1000?cb=20230430154720&path-prefix=en",
  "Bengal": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Bengal_-_193.jpg/960px-Bengal_-_193.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "Birman": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Birman_cat_%2851707197922%29.jpg/960px-Birman_cat_%2851707197922%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "Bombay": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Gato_Bombay_Echado.JPG/960px-Gato_Bombay_Echado.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "British Shorthair": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/British_Shorthair_Cat_2.jpg/960px-British_Shorthair_Cat_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "Burmese": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/BurMau_Vega_Star%2C_champagne_burmese_kitten_%28cropped%29.jpg/960px-BurMau_Vega_Star%2C_champagne_burmese_kitten_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "Burmilla": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Female_Burmilla_cat.jpg/960px-Female_Burmilla_cat.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "Chartreux": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Chartreux_JPG01.jpg/960px-Chartreux_JPG01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "Cornish Rex": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/20170604_kot_wystawa_Krak%C3%B3w_8006.jpg/960px-20170604_kot_wystawa_Krak%C3%B3w_8006.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "Devon Rex": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Devon_Rex_male.jpg/960px-Devon_Rex_male.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "Donskoy": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Sphynx_pyrel_H015.jpg/960px-Sphynx_pyrel_H015.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "Egyptian Mau": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Egyptian_Mau%27s_eyes_now_yellow%2C_according_to_mood.jpg/960px-Egyptian_Mau%27s_eyes_now_yellow%2C_according_to_mood.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "Elf": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Elf1111111.jpg/960px-Elf1111111.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "Exotic Shorthair": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/HK_HH_%E7%B4%85%E7%A3%A1_Hung_Hom_%E7%95%B0%E5%9C%8B%E9%95%B7%E7%9F%AD%E6%AF%9B%E8%B2%93_Exotic_Shorthair_bleed_cat_November_2020_SS2_08.jpg/960px-HK_HH_%E7%B4%85%E7%A3%A1_Hung_Hom_%E7%95%B0%E5%9C%8B%E9%95%B7%E7%9F%AD%E6%AF%9B%E8%B2%93_Exotic_Shorthair_bleed_cat_November_2020_SS2_08.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "Havana Brown": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Havana_Brown_-_choco.jpg/960px-Havana_Brown_-_choco.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
  "Himalayan": "",
  "Japanese Bobtail": "",
  "Korat": "",
  "LaPerm": "",
  "Maine Coon": "",
  "Manx": "",
  "Munchkin": "",
  "Nebelung": "",
  "Norwegian Forest Cat": "",
  "Ocicat": "",
  "Oriental Shorthair": "",
  "Persian": "",
  "Peterbald": "",
  "Pixiebob": "",
  "Ragamuffin": "",
  "Ragdoll": "",
  "Russian Blue": "",
  "Scottish Fold": "",
  "Selkirk Rex": "",
  "Siamese": "",
  "Siberian": "",
  "Singapura": "",
  "Snowshoe": "",
  "Somali": "",
  "Sphynx": "",
  "Tonkinese": "",
  "Turkish Angora": "",
  "Turkish Van": ""
};

const listaRazas = document.getElementById("listaRazas");
const mensaje = document.getElementById("mensaje");
const buscarNombre = document.getElementById("buscarNombre");
const filtroPelaje = document.getElementById("filtroPelaje");
const limpiarFiltros = document.getElementById("limpiarFiltros");

let razas = []; // Todas las razas recibidas del backend

// Consulta el backend, que a su vez obtiene los datos desde MySQL
async function cargarRazas() {
  try {
    mensaje.textContent = "Cargando razas...";
    const respuesta = await fetch(URL_API);

    if (!respuesta.ok) {
      throw new Error("El servidor respondió con estado " + respuesta.status);
    }

    razas = await respuesta.json();
    cargarPelajes();
    mostrarRazas(razas);
    mensaje.textContent = "Se encontraron " + razas.length + " razas.";
  } catch (error) {
    console.error("Error al cargar razas:", error);
    mensaje.textContent = "No fue posible cargar los datos. Revisa la URL del backend y que el servidor esté activo.";
  }
}

// Filtro de los pelajes recibidos (sin repetir)
function cargarPelajes() {
  const pelajes = [...new Set(razas.map(raza => raza.pelaje))].sort();

  filtroPelaje.innerHTML = '<option value="">Todos los pelajes</option>';
  for (const pelaje of pelajes) {
    const opcion = document.createElement("option");
    opcion.value = pelaje;
    opcion.textContent = pelaje;
    filtroPelaje.appendChild(opcion);
  }
}

// Recuadro que se muestra cuando una raza no tiene foto
function crearSinFoto() {
  const sinFoto = document.createElement("div");
  sinFoto.className = "foto-raza sin-foto";
  sinFoto.textContent = "Sin foto";
  return sinFoto;
}

// Dibuja una tarjeta por raza
function mostrarRazas(lista) {
  listaRazas.innerHTML = "";

  if (lista.length === 0) {
    const vacio = document.createElement("p");
    vacio.textContent = "No hay resultados.";
    listaRazas.appendChild(vacio);
    return;
  }

  for (const raza of lista) {
    // Columna de la grilla: 1 por fila en movil, 2 en tablet, 3 en escritorio
    const columna = document.createElement("div");
    columna.className = "col-12 col-md-6 col-lg-4";

    const tarjeta = document.createElement("article");
    tarjeta.className = "card tarjeta-raza h-100";

    const cuerpo = document.createElement("div");
    cuerpo.className = "card-body";

    const titulo = document.createElement("h2");
    titulo.className = "card-title h5";
    titulo.textContent = raza.nombre;

    const descripcion = document.createElement("p");
    descripcion.className = "card-text";
    descripcion.textContent = raza.descripcion ?? "";

    const pelaje = document.createElement("span");
    pelaje.className = "badge text-bg-secondary";
    pelaje.textContent = raza.pelaje;

    cuerpo.append(titulo, descripcion, pelaje);
    tarjeta.appendChild(cuerpo);

    // Foto al final de la tarjeta; si no hay URL o falla, se muestra "Sin foto"
    const urlFoto = FOTOS[raza.nombre];
    if (urlFoto) {
      const foto = document.createElement("img");
      foto.className = "card-img-bottom foto-raza";
      foto.src = urlFoto;
      foto.alt = "Foto de un gato " + raza.nombre;
      foto.loading = "lazy";
      foto.addEventListener("error", () => foto.replaceWith(crearSinFoto()));
      tarjeta.appendChild(foto);
    } else {
      tarjeta.appendChild(crearSinFoto());
    }

    columna.appendChild(tarjeta);
    listaRazas.appendChild(columna);
  }
}

// Aplica ambos filtros sobre el arreglo
function filtrarRazas() {
  const texto = buscarNombre.value.toLowerCase().trim();
  const pelaje = filtroPelaje.value;

  const resultado = razas.filter(raza => {
    const coincideNombre = raza.nombre.toLowerCase().includes(texto);
    const coincidePelaje = pelaje === "" || raza.pelaje === pelaje;
    return coincideNombre && coincidePelaje;
  });

  mostrarRazas(resultado);
  mensaje.textContent = "Resultados: " + resultado.length;
}

buscarNombre.addEventListener("input", filtrarRazas);
filtroPelaje.addEventListener("change", filtrarRazas);
limpiarFiltros.addEventListener("click", () => {
  buscarNombre.value = "";
  filtroPelaje.value = "";
  mostrarRazas(razas);
  mensaje.textContent = "Se muestran " + razas.length + " razas.";
});

cargarRazas();
