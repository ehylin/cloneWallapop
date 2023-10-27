export const createAnuncio = async(description, image, name, price, type) => {
    const imageUrl = await uploadImage(image);

    const url = "http://localhost:8000/api/anuncios";
    const token = localStorage.getItem('token');

    const body = {
        description: description,
        name: name,
        price: price,
        type: type
    }

    if (imageUrl) {
        body.image = imageUrl;
    }

    let response;
    try {
        response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            const data = await response.json()
            throw new Error(data.message);
        }
    } catch (error) {
        if (error.message) {
            throw error.message;
        } else {
            throw error;
        }
    }
}

const uploadImage = async(image) => {
    let imageUrl;

    try {
        const uploadManager = new Bytescale.UploadManager({
            apiKey: "public_FW25biuB7FCTi4QPc78WebD9jExu"
        });

        const { fileUrl } = await uploadManager.upload({ data: image });

        imageUrl = fileUrl;
    } catch (error) {
        imageUrl = null;
    }

    return imageUrl;
}