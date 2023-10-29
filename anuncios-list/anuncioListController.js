import { getAnuncios } from "./anuncioListModel.js";
import { buildAnuncio, emptyAnuncios } from "./anuncioListView.js";

export const anuncioListController = async(anuncioList) => {
    anuncioList.innerHTML = '';
    let anuncios = [];

    try {
        dispatchEvent('startLoadingAnuncios', null, anuncioList);
        anuncios = await getAnuncios();
        console.log(anuncios)

    } catch (error) {
        const event = createCustomEvent('error', 'Error cargando anuncios')
        anuncioList.dispatchEvent(event);
    } finally {
        dispatchEvent('finishLoadingAnuncios', null, anuncioList);
    }

    if (anuncios.length === 0) {
        anuncioList.innerHTML = emptyAnuncios();
    } else {
        renderAnuncios(anuncios, anuncioList);

        const event = createCustomEvent('success', 'Anuncios cargados correctamente');
        anuncioList.dispatchEvent(event);
    }

}

const renderAnuncios = (anuncios, anuncioList, loggedUserId) => {
    anuncios.forEach(anuncio => {
        const anuncioContainer = document.createElement('div');
        anuncioContainer.classList.add('anuncio');

        anuncioContainer.innerHTML = buildAnuncio(anuncio);



        anuncioList.appendChild(anuncioContainer)
    })
}

const createCustomEvent = (type, message) => {
    const event = new CustomEvent("anunciosLoaded", {
        detail: {
            type: type,
            message: message
        }
    });

    return event;
}

const dispatchEvent = (eventName, data, element) => {
    const event = new CustomEvent(eventName, {
        detail: data
    });

    element.dispatchEvent(event);
}