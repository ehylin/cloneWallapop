import { notificationsController } from "./notifications/notificationsController.js";
import { loaderController } from "./loader/loaderController.js";

const notifications = document.getElementById('notifications');


const showNotification = notificationsController(notifications);



document.addEventListener('DOMContentLoaded', () => {
    const anuncios = document.getElementById('anuncios');
    console.log(anuncios)

})


window.addEventListener('offline', () => {
    showNotification('Se ha perdido la conexión', 'error');
})