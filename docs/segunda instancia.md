# Informe académico (entrega 2)

## Construcción
### Implementación de funciones principales
Con respecto a la segunda entrega, se realizaron grandes cambios del proyecto, se trabajó principalmente en la clase "main", que su función es la manipulación de Document Object Models (DOMs), acceder a informacion del sistema para mostrar en el HTML, y responder a las interacciones del usuario. 
Muchas de las clases no fueron cambiadas, ya que su funcionalidad en el backend estaba prácticamente implementada, faltaba su uso con la interfaz, la cual aún le faltaba más de la mitad de funcionalidad.
También se han hechos cambios visuales pertinentes para ayudar en la manipulación de codigo.
Todos los test unitarios y linter fueron probados con resultados 100% SUCCESS (Captura de pantalla más abajo).
El (poco) cambio realizado al HTML fue testeado en el W3C Checker.
Se condensó todo el código HTML en un solo archivo, separando paneles y pantallas en "sections" que el apartado <script> cambia según la interaccion del usuario.

### Librerías externas
Para crear el proyecto, se utilizaron las siguientes librerías: 
- Bootstrap(Versión:5.3) para botones y otros componentes HTML para poder acelerar el proceso de codificación.
- Jest(Versión:29.7.0) para el testing unitario. 
- EsLint(Versión:9.5.0) para poder encontrar problemas en la codificación de el proyecto

## Interfaz de usuario
### Buenas prácticas
Al momento de desarrollar el proyecto, utilicé herramientas, como la extensión de Wave y el validador de W3C para poder verificar que el elproyecto esta desarollandose de forma correcta en cuanto al front-end, informandonos de problemas/inconsistencias en el código. 
### Usabilidad
La pagina posee diseño "responsive", el cual le permite ser visualizada de forma correcta en cualquier dispositivo (ya sea computadora, tablet, teléfono o otros). A fines de lograr un entorno más amigable para el usuario, cada botón de el programa devuelve algún tipo de feedback para asegurarle al usuario que sus acciones fueron realizadas con exito.
### Accesibilidad
Para que nuestra página sea lo más accessible posible para el publico general, se utilizó la extensión de navegador Wave, una herramienta para poder corregir problemas de visibilidad, y otros tipos de problemas los cuales empeoran la experiencia con usuarios que tengan algún tipo de discapacidad.

## Codificación
### Configuración de entorno de desarrollo
A la hora de desarrollar el proyecto utilizamos y configuramos las siguientes herramientas:
- Visual Studio Code, y extensiones: Además del soporte para HTML, CSS y JavaScript, se utilizó la terminal bash integrada principalmente para manipular GitHub y  la extensión Live Server para poder abrir la página en un entorno de servidor local.
- NodeJS: Para sus herramientas de testing y desarrollo.
- Jest: Testing unitario del codigo.
- EsLint: Testing de código estático.

### Estándares de codificación
Para mantener estandares de codificación a lo largo de todo el proyecto, utilizamos la herramienta EsLint, la cual analiza todo el codigo en busqueda de errores de indentación, falta de ; , variables inutilizadas y más.
En nuestro proyecto establecimos la indentación en EsLint a 2.
Utilizamos la nomenclartura camello con nombres descriptivos, logrando de esta forma, un codigo legible y facil de entender para desarrolladores internos o externos al proyecto.
### Buenas prácticas de OOP
En cuanto a Programación Orientada a Objetos, el proyecto guarda a los alumnos, padres y menús como clases o objetos. Esto asegura que el código sea facil de entender para alguien externo al proyecto, además de permitir el correcto uso de permisos de las propiedades de un objeto.
Se priorizó el orden y organización del codigo, segmentando los métodos que maniupaln el DOM con los métodos y funciones que manipulan el sistema
### Análisis estático de código
![image](https://github.com/user-attachments/assets/1cd090dc-d9ef-4cc9-8dbf-0225faddf2d3)


En esta imagen, podemos ver que el proyecto ejecuta EsLint sin errores.


## Test unitario
Debido a la necesidad de verificar que el proyecto sea robusto y tena la menor cantidad de fallas posibles una vez este implementado, utilizamos la herramienta Jest para reazliar el testing unitario de el proyecto.
### Buenas prácticas
Para poder crear un proyecto robusto y confiable, realizamos testing en el 100% de las clases de dominio, testeando todas las lineas de código. Y al momento de buscar fallas en el codigo, nos aseguramos de testear una falla a la vez, evitando el ocultamiendo de errores.
Gracias a esto, podemos decir con certeza que el proyecto posee cierto nivel de robustez.
### Informe de cobertura
![image](https://github.com/user-attachments/assets/9af5170d-3f51-4252-b2af-103230d3174b)


En esta imagen, podemos observar que Jest tiene un 100% de cobertura para la clase de dominio.

## Reflexión
### Técnicas aplicadas y aprendizajes
El código fue razonablemente comentado, intentando dejar de un lado distintos tipos de declaraciones y su uso comentado, mientras que algunas funciones fueron comentadas con su funcionamiento resumido en inglés. 
### Reflexión personal
Desde el comienzo de la segunda instancia supe que implementar estas funciones iban a llevar tiempo, por lo que me organicé lo mejor que pude, sin embargo, no pude evitar encontrarme con retrasos que me han dejado trabajando hasta altas horas de la noche en el proyecto.
Debo resaltar que estos tropezones me han permitido mejorar mis habilidades de manipular DOMs, y  me he sentido con ganas de implementar más cosas si el tiempo me lo permitía. 
