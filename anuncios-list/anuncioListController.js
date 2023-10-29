import { getAnuncios, searchAnuncios } from "./anuncioListModel.js";
import { buildAnuncio, emptyAnuncios } from "./anuncioListView.js";

export const anuncioListController = async(anuncioList) => {
    anuncioList.innerHTML = '';
    let anuncios = [];

    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        console.log(searchTerm);
        searchAnuncios(searchTerm, anuncioList);
    });

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



// export const renderAnuncios = (anuncios, anuncioList) => {
//     anuncioList.innerHTML = '';

//     anuncios.forEach(anuncio => {
//         const anuncioContainer = document.createElement('div');
//         anuncioContainer.classList.add('anuncio');

//         anuncioContainer.innerHTML = buildAnuncio(anuncio);


//         anuncioList.appendChild(anuncioContainer)
//     })
// }

export const renderAnuncios = (anuncios, anuncioList) => {

    anuncioList.innerHTML = '';

    if (anuncios.length === 0) {

        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'No se encontraron resultados.';
        anuncioList.appendChild(noResultsMessage);
    } else {
        anuncios.forEach(anuncio => {
            const anuncioContainer = document.createElement('div');
            anuncioContainer.classList.add('anuncio');

            anuncioContainer.innerHTML = buildAnuncio(anuncio);

            anuncioList.appendChild(anuncioContainer);
        });
    }
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