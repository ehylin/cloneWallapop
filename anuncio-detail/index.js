import { anuncioDetailController } from './anuncioDetailController.js'
import { notificationsController } from '../notifications/notificationsController.js'

document.addEventListener('DOMContentLoaded', () => {

    const params = new URLSearchParams(window.location.search);
    const anuncioId = params.get("id");

    const notifications = document.querySelector("#notifications");
    const showNotification = notificationsController(notifications);

    const anuncioDetail = document.querySelector('#anuncioDetail');

    anuncioDetail.addEventListener('anuncioLoaded', (event) => {
        showNotification(event.detail.message, event.detail.type);
    })

    anuncioDetailController(anuncioDetail, anuncioId);

})