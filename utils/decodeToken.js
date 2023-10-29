export const decodeToken = (token) => {
    let decodedToken;

    try {
        const stringifiedToken = atob(token.split(".")[1]);
        console.log(stringifiedToken)
        decodedToken = JSON.parse(stringifiedToken);
        console.log(decodedToken)
    } catch (error) {
        return null;
    }

    return decodedToken;
}