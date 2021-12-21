/**
 * @file navigator.js
 * Archivo para probar la función navigator
 * @author Juan Manuel Toscano Reyes <jtoscanoreyes.guadalupe@alumnado.fundacionloyola.net>
 * @license GPL v.3.0
 */
'use strict'

class Geolocalizador{
    constructor(){
        window.onload=this.iniciar.bind(this)
    }
    iniciar(){
        let geo=window.navigator.geolocation
        if(geo){
            console.log('si hay');
        }else{
            console.log('no hay');
        }
        console.log(geo);
        geo.getCurrentPosition(this.exito)
    }
    exito(a) {
        console.log(a.coords.latitude);
        console.log(a.coords.longitude);
    }
}
new Geolocalizador()