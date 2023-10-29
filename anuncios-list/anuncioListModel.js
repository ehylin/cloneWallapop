import { renderAnuncios } from "./anuncioListController.js";

const transformAnuncios = (anuncios) => {
    return anuncios.map(anuncio => ({
        //handler: anuncio.user.username,
        handler: anuncio.name,
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
        console.log(anuncios)
        parsedAnuncios = transformAnuncios(anuncios)
        console.log('aaaqio', parsedAnuncios);
    } catch (error) {
        throw error;
    }

    return parsedAnuncios;
}

export const searchAnuncios = async(searchTerm, anuncioList) => {
    const url = "http://localhost:8000/api/anuncios";

    console.log(searchTerm, 'ff')
    console.log(anuncioList)

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

        //parsedAnuncios = transformAnuncios(anuncios)

        renderAnuncios(filteredAnuncios, anuncioList);
    } catch (error) {
        throw error;
    }
};