// _____________________________________Arrays

//Lista de compras
const listaCompras = ['huevos', 'pan', 'carne', 'cebollas', 'arroz', 'manteca'];
listaCompras.push('aceite de girasol');
listaCompras.pop();

//Peliculas
const favPeliculas = [
  {
    titulo: 'The lord of the rings: the fellowship of the ring',
    director: 'Peter Jackson',
    fecha: 2001,
  },
  {
    titulo: 'The lord of the rings: The two towers',
    director: 'Peter Jackson',
    fecha: 2002,
  },
  {
    titulo: 'The lord of the rings: The return of the king',
    director: 'Peter Jackson',
    fecha: 2003,
  },
];

const nuevasPeliculas = favPeliculas.filter((e) => e.fecha > 2010);

const directores = favPeliculas.map((e) => e.director);

const titulos = favPeliculas.map((e) => e.titulo);

const peliculas1 = directores.concat(titulos);

const peliculas2 = [...directores, ...titulos];
