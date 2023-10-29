import { renderAnuncios } from "./anuncioListController.js";

const transformAnuncios = (anuncios) => {
    return anuncios.map(anuncio => ({
        handler: anuncio.user.username,
        description: anuncio.description,
        price: anuncio.price,
        photo: anuncio.image,
        id: anuncio.id,
        type: anuncio.type
    }))
}



export const getAnuncios = async() => {
    const url = "http://localhost:8000/api/anuncios";
    let parsedAnuncios = [];

    try {
        const response = await fetch(url);
        const anuncios = await response.json();

        parsedAnuncios = transformAnuncios(anuncios)

    } catch (error) {
        throw error;
    }

    return parsedAnuncios;
}

export const searchAnuncios = async(searchTerm, anuncioList) => {
    const url = "http://localhost:8000/api/anuncios";



    if (!url) {
        console.error("La variable 'url' está indefinida o tiene un valor incorrecto.");
        return;
    }

    try {
        const response = await fetch(url);
        const anuncios = await response.json();

        // Filtrar los anuncios que coincidan con la consulta
        const filteredAnuncios = anuncios.filter((anuncio) => {
            const name = anuncio.name.toLowerCase();
            return name.includes(searchTerm);
        });


        renderAnuncios(filteredAnuncios, anuncioList);
    } catch (error) {
        throw error;
    }
};