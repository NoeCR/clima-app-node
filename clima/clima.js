const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=4af224102c64a1aa1e80dd929d6ce131`)

    let data = resp.data;
    if (data.cod !== 200) {
        throw new Error(`No hay resultados para esa posición`);
    }
    return {
        temperatura: data.main.temp
    }
}

module.exports = {
    getClima
}