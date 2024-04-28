async function getData(url) {
    try {
        const responce = await fetch(url)
        const data = responce.json()
        return data;
    } catch (error) {
        console.log(error)
    }
};

function getRandomGame(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

module.exports = {getData};