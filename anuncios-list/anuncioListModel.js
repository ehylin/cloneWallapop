const transformAnuncios = (anuncios) => {
    return anuncios.map(anuncio => ({
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

    console.log('entro')

    try {
        const response = await fetch(url);
        const anuncios = await response.json();
        parsedAnuncios = transformAnuncios(anuncios)
        console.log('entro try')
    } catch (error) {
        console.log('entro cath')
        throw error;
    }

    return parsedAnuncios;
}