
Instrucciones para compilar archivos SCSS a CSS.

1 - Descargar node js en https://nodejs.org/es/download/

2 - Abrir una terminal en la carpeta BEMIT (este proyecto) y ejecutar la siguiente línea de comando:
npm install

3 - Una vez instalado todos los paquetes node_modules, 
ejecutar otra línea de comando para compilar el sass: 
gulp


Cada vez que sea editado compilará de nuevo (tiene un watch)

Los archivos SCSS de este proyecto, que estan en ./assets/scss/*.scss
se compilan en el archivo ./assets/css/main.css

