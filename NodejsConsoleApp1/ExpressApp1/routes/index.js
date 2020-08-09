//'use strict';

//import { listamalbumes } from '/modelo/listalbums.js';
var express = require('express');
var router = express.Router();
const list = require('../modelo/listalbums');



/* GET home page. */
router.get('/', async function (req, res) {
    //ida = "";
    var datalbum = await list.listamalbumes();
    //var buscaralbum = await list.buscarAlbum("");
    //datalbum.then(data => {
    //    //var y;

    //    //for (y of data) {
    //console.log(buscaralbum)
    //    //}
    //})
   
    //{ albums: dataalbums }
    //dataalbums.then(data => {
        //var y;
        //for (y of data) {
   
    res.render('index', { datalbum: datalbum});
    //});
});
router.get('/ver/(:id)', async function (req, res) {
    //ida = "";
    var buscaralbum = await list.buscarAlbum(req.params.id);
    var listcanciones = await list.listcanciones(req.params.id);
    console.log(listcanciones);
    res.render('ver', { buscaralbum: buscaralbum, listcanciones: listcanciones });
    
    
    //});
});
/*title: 'Express'*/
module.exports = router;
//button.btn.btn - primary(type = 'button', data - toggle='modal', data - target='#exampleModalCenter')
//.card(style = 'width:400px')
//img.card - img - top(id = "mimg", alt = 'imag', src = buscaralbum.im)
//    .card - body
//h4.card - title #{ buscaralbum.nameal }
//ul.list - group.list - group - flush
//for song in listcanciones
//     li.list - group - item #{ song.namesong }

