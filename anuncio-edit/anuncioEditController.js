import { getAnuncio, updateAnuncio } from "./anuncioEditModel.js";


export const anuncioEditController = async(anuncioEdit, anuncioId) => {

    const anuncio = await getAnuncio(anuncioId);
    const editForm = document.getElementById('editForm');


    editForm.name.value = anuncio.handler;
    editForm.description.value = anuncio.description;
    editForm.price.value = anuncio.price;
    editForm.type.value = anuncio.type;


    editForm.addEventListener('submit', async(event) => {
        event.preventDefault();


        const updatedAnuncio = {
            name: editForm.name.value,
            description: editForm.description.value,
            price: editForm.price.value,
            type: editForm.type.value

        };

        try {

            await updateAnuncio(anuncioId, updatedAnuncio);


            window.location.href = 'index.html';
        } catch (error) {

            console.error('Error al actualizar el anuncio:', error);
        }
    });

    anuncioEdit.innerHTML = buildAnuncio(anuncio);

};