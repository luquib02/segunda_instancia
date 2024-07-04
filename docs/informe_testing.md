# Informe de testing 
Proyecto asignado: [https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bonino-domingo-galdi]

## Test de sistema
### Diseño de casos de prueba

| Entrada/Variable | Clases Validas |Clases invalidas|
|--|--|--|
| Comentario | - Comentario valido(1) |- Comentario vacío(3)|
|Valoración|- Valoración valida(2)|- Valoración vacía(4)|


### Ejecución de casos de prueba

|Caso de prueba| Comentario | Valoración | Resultado esperado | Clases de equivalencia cubiertas|
|--|--|--|--|--|
| C1 | Correcto | 5 Estrellas | Mensaje: "Se ha ingresado la opinión de forma correcta"| 1,2
| C2 | | 5 Estrellas | Mensaje: "Falta comentario"| 3,2
| C3 | Correcto | | Mensaje: "Falta Valoración" | 1,4

### Sesiones de pruebas exploratorias

|Misión:| Testear las opiniones de las reservas del programa |
|--|--|
|Inicio:  |24/6/2024 - 13:00hs|
|Teseter | Juan Martín López
|Estructura de división| Duración: Media (60´) Diseño y ejecución de pruebas: 40% Investigación y reportes de defectos: 40 % Armado de la sesión: 20% Objetivo vs. Oportunidad: 90 / 10|
|Notas de pruebas| - [Prueba #1] Alquilar un auto y verificar que se guarden los cambios en el sistema - [Prueba #2] Alquilar una camioneta y verificar que se guarden los cambios en el sistema - [Prueba #3] Consultar reservas anteriores y valorar una reserva|
|Defectos| [#1] Los botones de rentar ahora en los menús de camionetas y autos no funcionan.| 
|Inconvenientes |- [#1] Las imágenes de la pagina no cargan de forma correcta, se probó en dos máquinas distintas, con dos navegadores distintos y en ninguna se pueden visualizar las imágenes. - [#2] El botón de “Reservas Anteriores” no funciona en la pagina principal, solo funciona mientras se está alquilando un vehículo.

## Reporte de issues
### Buenas prácticas
En el caso en el que se encuentre algún problema con el proyecto, el mismo será documentado con un issue en GitHub y se le asignara una clasificación correspondiente.
### Clasificación
**Severidad:**
- Alta: Afecta a la funcionalidad clave del sistema, es decir, es un problema critico el cual impide que el sistema funcione.
- Media: Si bien afecta a la experiencia de usuario, el sistema todavía es funcional.
- Baja: Detalle menor en cuanto al funcionamiento o comportamiento del sistema, el usuario debe poder seguir utilizando el sistema sin ningún problema.

**Prioridad:**
- Alta: Se debe asignar un esfuerzo inmediato a solucionar este issue.
- Media: Resolver el problema es algo a que se debe tomar en cuenta, pero no es critico.
- Baja: La solución a este problema es algo que se puede prorrogar.


## Informe de calidad del sistema
### Resumen de issues
Todos los problemas que hemos encontrado se deben a archivos inexistenes o que no estan siendo llamados de forma adecuada a la hora de ejecutar la página.
### Evaluación global de calidad
La página cumple con los estandares de accesibilidad de Wave, además de tener un diseño facil de entender. Sin embargo, no se puede realizar ningún tipo de reserva en el progrma debido a que los botones no funcionan de forma adecuada, y al momento de dejar una opinion sobre una reserva anterior.

## Reflexión
### Trabajo individual
- Juan Martín López:
    - Redacción de informe de testing
    - Issues en el proyecto 
    - Creación y ejecución de pruebas exploratorias


### Técnicas aplicadas y aprendizajes
En esta parte del proyecto, tuvimos un acercamiento a lo que es el testing de caja negra de un proyecto, en el cual, se tesean todas las funcionalidades de un programa disponibles a un usuario, aplicando pruebas exploratorias, definiendo y ejecutando casos de uso. Gracias a esto tenemos la capacidad de poder realizar testing de caja negra a otros proyectos.