import { buildLoader } from './loaderView.js'

export const loaderController = (loader) => {

    const showLoader = () => {
        loader.classList.add('active');
        loader.innerHTML = buildLoader();
    }

    const hideLoader = () => {
        loader.classList.remove('active');
        loader.innerHTML = '';
    }

    return {
        show: showLoader,
        hide: hideLoader
    }

}