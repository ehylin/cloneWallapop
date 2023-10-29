import { getAnuncio, updateAnuncio } from "./anuncioEditModel.js";
import { dispatchEvent } from '../utils/dispatchEvent.js';

export const anuncioEditController = async(anuncioEdit, anuncioId) => {

    const anuncio = await getAnuncio(anuncioId);
    const editForm = document.getElementById('editForm');

    // Asigna los datos del anuncio a los campos del formulario
    editForm.name.value = anuncio.handler;
    editForm.description.value = anuncio.description;
    editForm.price.value = anuncio.price;
    editForm.type.value = anuncio.type;

    // Agrega un manejador de eventos para el envío del formulario
    editForm.addEventListener('submit', async(event) => {
        event.preventDefault(); // Evita la recarga de la página

        // Obtiene los valores del formulario
        const updatedAnuncio = {
            name: editForm.name.value,
            description: editForm.description.value,
            price: editForm.price.value,
            type: editForm.type.value

        };

        try {
            // Llama a la función para actualizar el anuncio
            await updateAnuncio(anuncioId, updatedAnuncio);

            // Si la actualización es exitosa, puedes redirigir a la página de detalle del anuncio o mostrar un mensaje de éxito.
            // Por ejemplo:
            window.location.href = 'index.html';
        } catch (error) {
            // Manejo de errores, por ejemplo, mostrar un mensaje de error.
            console.error('Error al actualizar el anuncio:', error);
        }
    });

    anuncioEdit.innerHTML = buildAnuncio(anuncio);

};