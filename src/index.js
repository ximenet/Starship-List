const express = require('express');
const bodyParser = require('body-parser');
const redis = require("redis");

const getCharacter = require('./getCharacters');
const filterCharacters = require('./filterCharacters');

//Configuracion del puerto
var app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const client = redis.createClient();

app.post('/character', async (req, res) => {
    const { filter } = req.body;

    const result = await getCharacter();
    const respuesta = filterCharacters(result, filter);

    client.set('name', JSON.stringify({ asd: 'val'}), redis.print);
    
    for (var i=0; i < N; i++) {
        client.set(respuesta.nombre, JSON.stringify({ nombre: 'val'}), redis.print);
      }
       client.get("nombre", function(err, reply) {
          console.log(reply);
          //console.log(err);
      });



    res.json(result);
});

app.listen(port, () => console.log('listening en port', port, '!'));