import { createAnuncio } from "./anuncioCreationModel.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";

export const anuncioCreationController = (anuncioCreation) => {

    anuncioCreation.addEventListener('submit', async(event) => {
        event.preventDefault();

        const formData = new FormData(anuncioCreation);
        const description = formData.get("description");
        const name = formData.get("name");
        const fileInput = anuncioCreation.querySelector('#image');
        const price = formData.get('price');
        const type = formData.get('type');



        try {
            await createAnuncio(description, fileInput.files[0], name, price, type);
            dispatchEvent('anuncioCreated', { type: "success", message: "Anuncio creado correctamente" }, anuncioCreation);
            setTimeout(() => {
                window.location = "index.html";
            }, 3000);
        } catch (error) {
            dispatchEvent('anuncioCreated', { type: "error", message: "Error creando anuncio" }, anuncioCreation);
        }

    })
}