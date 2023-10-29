export const sparrestApi = () => {
    const baseUrl = "http://localhost:8000/";

    const get = async(endpoint) => {
        const url = baseUrl + endpoint;

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                const message = data.message || 'Ha ocurrido un error';
                throw new Error(message);
            }
        } catch (error) {
            throw error.message;
        }
    };

    const remove = async(endpoint) => {
        const url = baseUrl + endpoint;
        const token = localStorage.getItem('token');

        try {
            response = await fetch(url, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                const data = await response.json()
                const message = data.message || 'No ha sido posible borrar el elemento';
                throw new Error(message);
            }
        } catch (error) {
            if (error.message) {
                throw error.message;
            } else {
                throw error;
            }
        }


    }

    const put = async(endpoint, data) => {
        const url = baseUrl + endpoint;
        const token = localStorage.getItem('token');

        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const responseData = await response.json();
                const message = responseData.message || 'No ha sido posible actualizar el elemento';
                throw new Error(message);
            }
        } catch (error) {
            if (error.message) {
                throw error.message;
            } else {
                throw error;
            }
        }
    };

    return {
        get: get,
        delete: remove,
        put: put,
    }
}