import { sparrestApi } from "../utils/sparrestApi.js";

const parseAnuncio = (anuncio) => {
    return {
        handler: anuncio.name,
        description: anuncio.description,
        // userId: anuncio.users.id,
        price: anuncio.price,
        type: anuncio.type,
        id: anuncio.id
    }
}

// export const getAnuncio = async(anuncioId) => {
//     console.log(anuncioId)
//     console.log('entrna')
//     const endpoint = `api/anuncios/${anuncioId}`;
//     console.log(endpoint)

//     const anuncio = await sparrestApi().get(endpoint)
//     console.log('aqui aqui', anuncio)

//     return parseAnuncio(anuncio);
// }

export const getAnuncio = async(anuncioId, loggedUserId) => {
    const endpoint = `api/anuncios/${anuncioId}`;

    try {
        const anuncio = await sparrestApi().get(endpoint);
        const parsedAnuncio = parseAnuncio(anuncio);

        // Verifica si el usuario logeado es el creador del anuncio
        parsedAnuncio.isCreator = loggedUserId === parsedAnuncio.userId;
        console.log(parseAnuncio)
        return parsedAnuncio;
    } catch (error) {
        // Manejo de errores
        throw error;
    }
}


export const deleteAnuncio = async(anuncioId) => {
    const endpoint = `api/anuncios/${anuncioId}`;

    await sparrestApi().delete(endpoint);
}