import { sparrestApi } from '../utils/sparrestApi.js'

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


export const updateAnuncio = async(anuncioId, updatedData) => {
    const endpoint = `api/anuncios/${anuncioId}`;

    try {
        const response = await sparrestApi().put(endpoint, updatedData);

        return response // Puedes ajustar esto según la respuesta real del servidor
    } catch (error) {
        throw error;
    }
};