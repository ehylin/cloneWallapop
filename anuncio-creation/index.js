import { anuncioCreationController } from "./anuncioCreationController.js";
import { notificationsController } from "../notifications/notificationsController.js";

const token = localStorage.getItem('token');
if (!token) {
    window.location = './index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const anuncioCreation = document.querySelector('#anuncioCreation');

    const notifications = document.querySelector('#notifications');
    const showNotification = notificationsController(notifications);

    anuncioCreation.addEventListener('anuncioCreated', (event) => {
        showNotification(event.detail.message, event.detail.type);
    });

    anuncioCreationController(anuncioCreation);

})