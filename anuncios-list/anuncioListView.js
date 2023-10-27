export const buildAnuncio = (anuncio) => {
    return `
  <a href="./anuncioDetail.html?id=${anuncio.id}">
    <span>${anuncio.handler}</span>
    <img src="${anuncio.photo}" alt="anuncio image">
    <p>${anuncio.description}</p>
    <p>${anuncio.price}$ Euros</p>
    <p>tipo: ${anuncio.type}</p>
  </a>

`;
}


export const emptyAnuncios = () => {
    return `<h3>No hay anuncios disponibles, disculpa las molestias.</h3>`
}