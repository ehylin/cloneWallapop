import { deleteAnuncio, getAnuncio } from "./anuncioDetailModel.js";
import { buildAnuncio } from "./anuncioDetailView.js";
import { dispatchEvent } from '../utils/dispatchEvent.js'
import { decodeToken } from '../utils/decodeToken.js'

export const anuncioDetailController = async(anuncioDetail, anuncioId) => {

    try {
        const anuncio = await getAnuncio(anuncioId);
        anuncioDetail.innerHTML = buildAnuncio(anuncio);
        console.log(anuncio)
        handleDeleteAnuncio(anuncio, anuncioDetail);
    } catch (error) {
        dispatchEvent('anuncioLoaded', { type: "error", message: "El anuncio no existe" }, anuncioDetail);
        // setTimeout(() => {
        //     window.location = './index.html';
        // }, 3000);
    }

}

const handleDeleteAnuncio = (anuncio, anuncioDetail) => {
    const token = localStorage.getItem('token');
    console.log(token)

    if (token) {
        const { userId } = decodeToken(token);
        console.log(userId)
        console.log(anuncio)

        if (userId === anuncio.userId) {
            addDeleteAnuncioButton(anuncio, anuncioDetail);
        }
    }
}

const addDeleteAnuncioButton = (anuncio, anuncioDetail) => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar anuncio';
    deleteButton.addEventListener('click', async() => {
        if (confirm('¿Seguro que quieres borrar el anuncio?')) {
            await deleteAnuncio(anuncio.id);
            window.location = 'index.html';
        }
    })

    anuncioDetail.appendChild(deleteButton);
}