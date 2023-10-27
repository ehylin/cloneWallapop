export const buildAnuncio = (anuncio) => {
    return `
  <a href="./tweetDetail.html?id=${anuncio.id}">
    <span>${anuncio.handler}</span>
    <img src="${anuncio.photo}" alt="tweet image">
    <p>${anuncio.description}</p>
    <p>${anuncio.price}$ Euros</p>
  </a>

`;
}


export const emptyAnuncios = () => {
    return `<h3>No hay anuncios disponibles, disculpa las molestias.</h3>`
}