// const axios = require('axios');

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv;
// const argv = require('yargs').options({
//     direccion: {
//         alias: 'd',
//         desc: 'Dirección de la ciudad para obtener el clima',
//         demand: true
//     }
// }).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         clima.getClima(resp.lat, resp.lng)
//             .then(temp => {
//                 console.log(`${temp.temperatura}º`);
//             })
//             .catch(err => console.log(err));
//     })
//     .catch(e => console.log(e));

let getInfo = async() => {
    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `EL clima en ${ coors.direccion } es de ${ temp.temperatura }º`;
    } catch (e) {
        return `No se pudo determinar el clima en ${argv.direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));