import { anuncioEditController } from './anuncioEditController.js'
import { notificationsController } from '../notifications/notificationsController.js'

document.addEventListener('DOMContentLoaded', () => {

    const params = new URLSearchParams(window.location.search);
    const anuncioId = params.get("id");

    const notifications = document.querySelector("#notifications");
    const showNotification = notificationsController(notifications);

    const anuncioEdit = document.querySelector('#anuncioEdit');

    anuncioEdit.addEventListener('anuncioLoaded', (event) => {
        showNotification(event.detail.message, event.detail.type);
    })

    anuncioEditController(anuncioEdit, anuncioId);

})