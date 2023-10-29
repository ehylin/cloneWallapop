export const buildAnuncio = (anuncio) => {
    return `
  <a href="./anuncioDetail.html?id=${anuncio.id}">
    <h3>${anuncio.handler}</h3>
    <img  src="${anuncio.photo}" alt="anuncio image">
    <p>${anuncio.description}</p>
    <p>${anuncio.price}$ Euros</p>
    <p>tipo: ${anuncio.type}</p>
  </a>
  </br>
  <a href="./anuncio-edit.html?id=${anuncio.id}">Editar anuncio</a> 

`;
}



export const emptyAnuncios = () => {
    return `<h3>No hay anuncios disponibles, disculpa las molestias.</h3>`
}