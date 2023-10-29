import { sparrestApi } from "../utils/sparrestApi.js";

const parseAnuncio = (anuncio) => {
    return {
        handler: anuncio.user.username,
        description: anuncio.description,
        userId: anuncio.users.id,
        price: anuncio.price,
        type: anuncio.type,
        id: anuncio.id
    }
}

export const getAnuncio = async(anuncioId) => {
    const endpoint = `api/anuncios/${anuncioId}?_expand=user`;

    const anuncio = await sparrestApi().get(endpoint);

    return parseAnuncio(anuncio);
}


export const deleteAnuncio = async(anuncioId) => {
    const endpoint = `api/anuncios/${anuncioId}`;

    await sparrestApi().delete(endpoint);
}