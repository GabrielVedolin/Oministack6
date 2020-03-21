const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer')

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

//req : sao os dados que os user vao enviar 
//res : é o retorno dos dados
routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);



routes.post(
    //'/files',
    '/boxes/:id/files',
    multer(multerConfig).single('file'),
    FileController.store)
module.exports = routes;
