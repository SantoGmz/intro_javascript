const diasDeLaSemana = new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");

let nombresFamiliares = new Array("Clara Santos", "Vidal Santos", "Balvina Gomez", "Santana Severino Perez", "Gabrila Nuñez", "Nercida perez","Ochichi Santos", "Jhon Smit Vidal Santos", "Nelson Gomez", "Alfredo Danvici", "Vielka Carolina", "Joelvi Perez","Gladys Santos");

var datosPersonales = {
    nombre: {
        primerNombre:"Santos",
        segundoNombre:"Severino",
        apellido:"Gomez"
    },
    fechaDeNacimiento:"11/09/1999",
    lugarDeNacimiento:"Santiago",
    edad:"20",
    number: 815,
    comidasFavoritas:{
        plato1: null,
        plato2: null,
        plato3: null
    },
    paisesQueVisitare: {
        pais1: "Afganistán",
        pais2: "Georgia",
        pais3: "Francia",
        pais4: "Filipinas",
        pais5: "Alemania"
    },
    poseoLicenciaDeConducir: false,
    estoyEnlaUniversidad:false
};

const artistaFavorito ={
    nombre:{
        nombreArtistico:"Canserbero",
        nombreReal: "Tirone José Gozáles Orama",
        otrosNombresArtisticos:"Tyrone, Can, Catire, El Chamo González, Índigo, El Último Poeta Hardcore"
    },
    padres:{
        padre:"José Rafael González Ollarves",
        madre:"Leticia Coromoto Orama"
    },
    fechaDeNacimiento:{
        dia:1,
        mes:3,
        year:1988
    },
    lugarDeNacimiento:"Maracay",
    nacionalidad:"venezolano",
    residencia:"Maracay",
    religion:"agnoticismo",
    informacionProfessional:{
        ocupacion:"Rapero/Compositor",
        yearsActivo:"2000 - 2015",
        instrumento:"voz",
        discografia:"independiente"
    },
    top4Albumes:{
        album1: {
            nombre:"Guía para la acción",
            cancionesFavoritas:{
                cancion1:"Mañana Sera Otro Día",
                cancion2:"canbiate",
                cancion3:"perdón",
                cancnion4:"Así mismo"
            },
            canciones:16,
            fechaDeLanzamiento:2009
        },
        album2:{
            nombre:"Vida",
            cancionFavorita:"Perdiendo la fé",
            canciones:17,
            fechaDeLanzamiento:2009

        },
        album3:{
            nombre:"Muerte",
            cancionFavorita:"En el Valle de las Sombras",
            canciones:14,
            fechaDeLanzamiento:2012
        }
    },
    fallecimiento:{
        causa:"Homicidio o asesinado",
        dia:20,
        mes:01,
        year:2015
    }
};

console.log("Mi nombre es "+datosPersonales.nombre.primerNombre+" "+datosPersonales.nombre.segundoNombre+" "+datosPersonales.nombre.apellido);
console.log("Nací "+datosPersonales.fechaDeNacimiento);
console.log(`Me gustaria visitar ${datosPersonales.paisesQueVisitare.pais3}`);
console.log(`Mi artista favorito nacio ${artistaFavorito.fechaDeNacimiento.dia}/${artistaFavorito.fechaDeNacimiento.mes}/${artistaFavorito.fechaDeNacimiento.year}, Su nombre es ${artistaFavorito.nombre.nombreReal} mejor conodcido como ${artistaFavorito.nombre.nombreArtistico} y fallecio ${artistaFavorito.fallecimiento.dia}/${artistaFavorito.fallecimiento.mes}/${artistaFavorito.fallecimiento.year}`);
console.log("Día de semana en que nací fue "+ diasDeLaSemana[6]);