# Informe académico (entrega 2)

## Construcción
### Implementación de funciones principales
Si bien nuestro proyecto tiene un login funcional y gran parte de la logica realizada, nos falta cumplir con ciertos requerimientos funcionales. Siendo mas especificos, nos falta la implementación de trackeo de alumnos, la opción de seleccionar menúes para alumnos, y para padres, la opción de poder administrar que alimentos pueden o no elegir sus hijos.
### Librerías externas
Para crear nuestro proyecto, utilizamos las siguientes librerías: 
- Bootstrap(Versión:5.3) para botones y otros componentes HTML para poder acelerar el proceso de codificación.
- Jest(Versión:29.7.0) para el testing unitario. 
- EsLint(Versión:9.5.0) para poder encontrar problemas en la codificación de nuestro proyecto

## Interfaz de usuario
### Buenas prácticas
Al momento de desarrollar nuestro proyecto, utilizamos herramientas, como la extensión de Wave y el validador de W3C para poder verificar que nuestro proyecto esta desarollandose de forma correcta en cuanto al front-end, informandonos de problemas/inconsistencias en nuestro código. 
### Usabilidad
Nuestra pagina posee diseño responsive, el cual le permite ser visualizada de forma correcta en cualquier dispositivo (ya sea computadora, tablet, teléfono o otros). A fines de lograr un entorno más amigable para el usuario, cada botón de nuestro programa devuelve algún tipo de feedback para asegurarle al usuario que sus acciones fueron realizadas con exito.
### Accesibilidad
Para que nuestra página sea lo más accessible posible para el publico general, utilizamos la extensión de navegador Wave, una herramienta para poder corregir problemas de visibilidad, y otros tipos de problemas los cuales empeoran la experiencia con usuarios que tengan algún tipo de discapacidad.

## Codificación
### Configuración de entorno de desarrollo
A la hora de desarrollar nuestro proyecto utilizamos y configuramos las siguientes herramientas:
- Visual Studio Code: Además del soporte para HTML, CSS y JavaScript, utilizamos la terminal bash integrada principalmente para manipular GitHub y  la extensión de Live Server para poder abrir la página
- NodeJS: Para sus herramientas de testing y desarrollo.
- Jest: Testing unitario del codigo.
- EsLint: Testing de código estático.

### Estándares de codificación
Para mantener estandares de codificación a lo largo de todo el proyecto, utilizamos la herramienta EsLint, la cual analiza todo el codigo en busqueda de errores de indentación, falta de ; , variables inutilizadas y más.
En nuestro proyecto establecimos la indentación en EsLint a 2.
Utilizamos la nomenclartura camello con nombres descriptivos, logrando de esta forma, un codigo legible y facil de entender para desarrolladores internos o externos al proyecto.
### Buenas prácticas de OOP
En cuanto a Programación Orientada a Objetos, nuestro proyecto guarda a los alumnos, padres y menús como clases o objetos. Esto asegura que nuestro código sea facil de entender para alguien externo al proyecto, además de permitir el correcto uso de permisos de las propiedades de un objeto.
### Análisis estático de código
![imagen](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/assets/115313229/088bacd7-2e2f-4816-9f35-e646fe1bca4d)

En esta imagen, podemos ver que nuestro proyecto ejecuta EsLint sin errores.


## Test unitario
Debido a la necesidad de verificar que nuestro proyecto sea robusto y tena la menor cantidad de fallas posibles una vez este implementado, utilizamos la herramienta Jest para reazliar el testing unitario de nuestro proyecto.
### Buenas prácticas
Para poder crear un proyecto robusto y confiable, realizamos testing en el 100% de las clases de dominio, testeando todas las lineas de código. Y al momento de buscar fallas en el codigo, nos aseguramos de testear una falla a la vez, evitando el ocultamiendo de errores.
Gracias a esto, podemos decir con certeza que nuestro proyecto posee cierto nivel de robustez.
### Informe de cobertura
![imagen](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/assets/115313229/1ef8b704-d6c5-484f-9d79-34a3a88fb356)

En esta imagen, podemos observar que Jest tiene un 100% de cobertura para la clase de dominio.

## Reflexión
### Trabajo individual
-Juan Martín López:
    - Desarrollo de código de dominio
    - Testing unitario
    - Tesing de proyecto de un tercero
    - Documentación

- Luca Bafico:
    - Desarrollo de código de interfaz

### Técnicas aplicadas y aprendizajes
A lo largo del desarrollo del proyecto aprendimos a utilizar herramientas desconocidas previamente (por ejemplo Jest y EsLint), logramos entender y experimentar toda la documentación y desarrollo de un proyecto de software. En esta segunda entrega, hubo un gran enfoque en la parte de codificación del proyecto, la cual nos posiciona en lo que sería un entorno de desarrollo en un futuro emprendimiento o trabajo.
Sin embargo, también experimentamos obstaculos a lo largo del desarrollo del proyecto, principalmente la administración de tiempo y la capacidad de saber cuanto tiempo nos toma cada parte de este proyecto.