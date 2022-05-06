var express = require('express');
var router = express.Router();
//Simular base de datos
//var tablaLibros={'id':1,'titulo':'el perfume','autor':'Patrik Süskind'}
var tablaLibros2 = [
                    {'id':1,'titulo':'el perfume','autor':'Patrik Süskind'},
                    {'id':2,'titulo':'El hobit','autor':'Tolkien'},
                    {'id':3,'titulo':'La biblia','autor':'Apostoles'}
                  ];

router.get('/', function(req, res, next) {
//Aqui se realiza la consulta a base de datos
res.status(200).json(tablaLibros2);
});

router.get('/:idLibro', (req,res,next)=>{
  var id = req.params.idLibro;
  res.status(200).json(tablaLibros2[id-1]);
});

router.post('/:idLibro', (req,res,next)=> {
  res.status(400).json({'error':'Operacion no permitida'});
});

router.post('/',(req,res,next)=>{
  console.log(req.body);
  var libro = {
    'id':tablaLibros2[tablaLibros2.length-1]['id']+1,
    'titulo':req.body.titulo,
    'autor':req.body.autor
  };
  //insert en bd del objeto libro
  tablaLibros2.push(libro);
  // La respuesta de BD regresara a el cliente.
  res.status(200).json(tablaLibros2[tablaLibros2.length-1]);

});

router.patch('/:idLibro', (req,res,next)=>{
  var id = req.params.idLibro;
  //tablaLibros2 [req.body.id]['titulo']=req.body.titulo;
  //Relacional --> Update libros set titulo....
  tablaLibros2[id-1]['titulo']=req.body.titulo;
  tablaLibros2[id-1]['autor']=req.body.titulo;
  res.status(200).json({'mensaje':'Actualizado'});
});


module.exports = router;
