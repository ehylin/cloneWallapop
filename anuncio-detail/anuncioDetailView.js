export const buildAnuncio = (anuncio) => {
    let anuncioTemplate = `
     <span>  ${anuncio.image}</span>
    </br> 
    <span> Nombre: ${anuncio.handler}</span>
    <p>Descripcion: ${anuncio.description}</p>
    <p>Precio: ${anuncio.price}</p>
    <p>Tipo: ${anuncio.type}</p>
    `;

    return anuncioTemplate;
}