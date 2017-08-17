# WIKI

### Internet
GET se suele emplear más para petición de páginas y POST para envio de formularios.

### Require && Export
Si queremos tener un código modular, debemos de crear en un fichero independiente el
objeto o la funcion y al final del fichero agregar la linea:
```javascript
// La funcion que queremos exportar se llama parse
// Podemos exportar varias cosas.
module.export.name = 'Uriel';
module.export.parse = parse;
```
Mientras que en el archivo main principal donde queremos importar esta función:
```javascript
parser = require("./params_server.js")
var p = parser.parse
```


### NPM
Es el manejador de paquetes con más paquetes disponible para node.
Lo más seguro que al tener instalado node NPM se encuentre instalado.
```
npm init
```
Va a inicializar nuestro proyecto creando el package, donde se van a incluir las dependencias.
```
npm install express --save
```
Sin tener la carpeta node_modules al tener el fichero package todos los modulos se instalar con el siguiente comando.
```
npm install
```
Una buena practica es no tener la carpeta de node_modules en git.
En .gitignore agregamos la siguiente linea para que no se incluyan en el seguimiento.
/node_modules


## Express
Es un framework minimalista para express. También es modular con lo que podemos incluir nuevos modulos.
Las respuestas con send se cierran con write siguen abiertas hasta que se finalizan creo que con end.

```javascript
require('express')
app = express()

app.get("/", function (req, res){
  res.send("Hola mundo");
});

app.listen(8080);
```

## Nodemon
Librería para que cada vez que guardemos el fichero de node, no tener que estar apagando y encendiendo el servidor de forma manual. Esto se hará de forma automática.
**Esta librería es solo para la hora de desasrrollar en servidor de pruebas.**
```
npm i -D nodemon
```
