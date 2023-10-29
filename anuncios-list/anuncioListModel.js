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
    const url = "http://localhost:8000/api/anuncios?_expand=user";
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