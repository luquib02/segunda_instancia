# Informe académico (entrega 1)

## Repositorio Git

### Repositorios locales y remotos

#### Aplicación de Git (Repositorio Local)
Se utiliza git para el manejo y administracion de codigo y documentacion del proyecto, los comandos relevantes son:
- ```git add .``` 
    Agrega todos los cambios a la staging area
- ```git commit -m ```
    Agrega los cambios al repositorio local con un mensaje
- ```git branch```
    Crea una rama nueva
- ```git checkout```
    Cambia la rama que estamos modificando actualmente

#### Repositorio Remoto
GitHub es nuestra plataforma selecionada como repositorio remoto, para utilizarlo, haremos uso de los siguientes comandos:
- ```git clone```
    Clona un repositorio remoto al repositorio local
- ```git pull```
    Copia los cambios de un repositorio remoto al local
- ```git push```
    Copia los cambios del repositorio local a uno remoto
 

##  Versionado
Utilizaremos nomenclatura numerica para diferenciar distintas versiones del producto, ```.X``` indicando cambios menores y bug-fixes, mientras que ```X``` representa cambios significativos implementados en el producto. 
### Buenas prácticas de versionado
Además de los apartados cubiertos anteriormente, hemos utilizado otras ramas (o branches) para la organización del código y evitar lo más posibles conflictos.
### Evolución del proyecto

## Elicitación
### Actividades de investigación
### Stakeholders
Para poder realizar las actividades de investigación, primero necesitamos definir a los stakeholders del proyecto:
- Profesores: Interés Bajo, Poder Bajo
- Cocineros escolares: Interés Alto, Poder alto
- Padres: Interes Alto, Poder Medio
- Alumnos: Interes Alto, Poder Medio
- Funcionarios: Interes Alto, Poder Alto
- Gobierno: Interés Bajo, Poder Alto

A fines de visualizar esta información de mejor manera, realizamos la siguiente gráfica
![imagen](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/assets/115313229/1c6768ef-793c-4bdf-8131-5cc729fdc2d1)

#### Tormenta de ideas

Mediante reuniones presenciales y online, los integrantes del equipo se reunieron a proponer ideas para el proyecto.

#### Entrevistas

Como actividad principal de investigación, realizaremos entrevistas a los potenciales stakeholders del proyecto

Se indaga al respecto de las necesidades o deseos de los clientes (usuarios), su prioridad será definida conforme a los resultados de las mismas.
Las preguntas para las entrevistas varían según el stakeholder, por ejemplo, para un padre, realizaremos las siguientes preguntas:
- ¿Que tan interesado estarías en la implementación de nuestra aplicación?
>**En base a la respuesta a la pregunta**

- ¿Porque estarías o no interesado en la aplicación?
  
     >**En caso de responder no**
      
    - ¿Que haría que nuestro proyecto sea una propuesta mas interesante para usted?
      
     >**En caso de responder si**
      
    - ¿Te resulta importante concocer los contenidos del menú o de los menúes disponibles que tiene tu hijo/hija?
    - ¿Y los valores nutricionales?
    - ¿Te gustaría tener la opcion de elegir que elementos puede comer o no tu hijo/hija?

A continuación se encuentra la transcripción de la entrevista con una profesora de primaria.
Desarrollador  (00:03)
Entonces bueno para que entiendas un poco de que va a la aplicación, porque sí te pregunto cosas así no vas a entender. El proyecto, este se trata de una aplicación de comedor escolar. Qué sirve tanto para escuelas como liceos, públicos o privados para que el alumno pueda elegir el menú. 

Desarrollador  (00:19)
Por ejemplo, le ofrece un distinto de opción de menús vos también, como profesora como padre o profesor puede hacer un seguimiento de si [los alumnos] van o no van, qué están comiendo, el valor nutricional de lo que están comiendo... 

Entrevistado  (00:29)
A mí me gusta entonces un menú, precisaría. 

Desarrollador  (00:33)
Pues bien, entonces si te interesa la aplicación.

Entrevistado
 Sí. 

Desarrollador
¿Te resulta importante que los padres sepan el contenido de la comida que están comiendo tipo que contiene; carnes, arroz o lo que sea. 

Entrevistado  (00:48)
Sí, por ejemplo, para los padres en la escuela preguntan para no repetirles la misma comida, por ejemplo si el niño comio fideos ese mediodia en la escula el padre no le va a volver a hacer fideos, en la esculea tenemos una cartelera que ponemos el menu semanal, el padre va y puede ver lo que el niño comerá esa semana.
Desarrollador  (01:17)
Bien, y los valores nutricionales, tipo Macro, micronnutrientes.... 

Entrevistado  (01:21)
Sí, no, eso no está detallado y solo hacen las nutricionistas de primaria. 

Entrevistado  (01:31)
Lo que pasa es que no se cuanto conocimiento tenga la población a nivel general, entonces, como que se confía más a la dietitas que lo hace, no sé qué tanto les puede interesar y no sé cómo lo entenderían los padres como procesarian esa informacion si no tienen el conocimiento de cuantos rquieren en proteinas. 

Desarrollador  (01:53)
O sea que a los padres les serviría que sean predefinidos los menús saludables. 

Entrevistado  (01:58)
Sí y saber lo que comieron. 

Desarrollador  (02:01)
Te parece útil que los padres pueden restringir este qué alimentos comen los niños o no, en caso, por ejemplo, alergias? 

Entrevistado  (02:10)
Perfecto, un niño lleva un certificado médico de que tiene, por ejemplo, alergia a determinados alimentos o que es diabético. 

Desarrollador  (02:26)
Perfecto. ¿Y qué opinas de que aplicación tenga una función de seguimiento a los alumnos? Es decir, si están asistiendo al comedor o no.

Entrevistado  (02:36)
Me parece bien, me parece más importante saber si comieron o no. 

Desarrollador  (02:50)
Alguna función que te gustaría que implementemos que se te ocurre.

Entrevistado  (03:10)
Podría crear un menú individualizado para cada alumno, lo bueno no sería viable para que mi primavera mande, para que darle un nuevo gozarno, pero sí estaría buena porque el niño se vería incendido con una, pero ella para que nos saldremos de lo que le saluda a medio que no. 

Desarrollador  (03:28)
Bueno, perfecto, muchas gracias.

#### Encuestas

Se realizaron encuestas mediante Formularios de Google y una entrevista a una potencial persona de interés para el proyecto
Estos son los resultados de la encuesta, y las preguntas con respuestas largas escritas directamente aquí.
![image](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/assets/67663105/6baf4d70-0513-4e41-b2b1-f80efc3ca358)
![image](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/assets/67663105/499bc81e-0ee6-4080-8a40-f9793da8bcbd)

#### ¿Qué elementos de carácter lúdico o educativo podemos implementar en la aplicación para fomentar hábitos alimenticios saludables? (Todos los encuestados)
- charlas, gigantografias o juegos sobre la alimentacion variada,sobre los nutrientes y para que son importantes. Hacer entender que no hay alimentos "malos" sino alimentos nutritivos y no nutritivos.
- Juegos de memoria con alimentos saludables o desafíos de cocina virtual
- Recompensas canjeables en la vida real, del estilo gift cards
- Clases de cocina en el hogar integrado con educación financiera en el hogar
- Juegos o sorteos que tengan como premio alimentos saludables
- Recomendaciones semanales así como también ofrecer un historial de que alimentos ha consumido el usuario durante la semana.
- un índice informando que es la alimentación saludable, añadiendo recetas, comida variada, también poner recordatorios para hacer todas las comidas, etc
- No sabría sobre implementar pero tengo bien claro que el principal problema en la alimentación infantil es la manera en la que las series animadas retratan la relación con las verduras y comida de carácter saludable, quizá dar una educación bien enfocada en como el cuerpo puede cambiar comiendo mas saludable y variado pueda ayudar.
- Diseñar algún método rutinario donde los alimentos sean saludables para la persona y como dato adicional, los ejercicios físicos para mejoramiento de la salud a largo plazo
- Recordatorio de beber agua. Destacar la importancia de no consumir altas dosis de cafeina
- Presentar los platos que sean atractivos para los niños con motivos infantiles contando con alimentos variados como carne o pollo o pescado, verduras, cereales, etc, que sean ricos y les guste no solo el sabor sino cómo están presentados
- Dar a elegir distintas opciones de alimentos saludables para desayuno, almuerzo, merienda y cena, y que al elegir conforme una guía
- Variación en los menús, omidas atipicas
- Juegos
- Visitar lugares donde se cultivan frutales y hortalizas para vean de donde proceden estos alimentos saludables
- Recordar que nada en mucha cantidad es bueno, ya sea dejar de comer algo por mucho tiempo o comer mucho de algo
- Recordares que el consumo de agua es importante, agregar cuanta agua aprox debe de tomar según edad y peso

### Alumnos
![image](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/assets/67663105/45679c3b-05a8-4168-b394-c71794c6e28c)
![image](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/assets/67663105/1b267a94-5597-4552-9a11-68e6f36e1b3f)
![image](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/assets/67663105/c621714f-e9c3-448e-89c5-ece6f14abf5c)
#### Que consideras importante para elegir el menú?
- que sea rico, nutritivo, variado y acorde al hambre que siento en el momento
- Que sea rico y que no me quede con hambre
- Que sea rico y tenga buena apariencia
- Valor calórico, diversidad de comida
- Los ingredientes, el precio
- Un balance entre los ingredientes
- que me guste que sea variado y que dentro de todo sea sano
- Yo pienso que deberia haber libertad de elegir el menu pero con cierto reglamentacion para que los infantes puedan comer saludable incluso aunque elijan ellos.
- Que tantas variedades de comidas tenga (Comida para vegetarianos, personas alergicas y/o con intolerancias a algun/os alimentos, etc).
- Rico y gustoso, sabores y variedad de olores
- Que no tenga elementos fritos, que incluyan verdura y que no sea principalmente carbohidratos
- Que se escuche saboroso
- Considero importante elegir las cosas que me gustan su sabor
- Que contenga una fuente de proteínas
- Que la comida me guste, depende del día si elijo algo sano o no, también la cantidad de la comida es algo importante y el precio
- La variedad de alimenos, los ingredientes y variedad de metodos de cocción
#### Padres y tutores
![image](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/assets/67663105/404d08d7-86fd-4330-b723-af68846aa95d)
![image](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/assets/67663105/dcbb5756-821b-4f56-9408-0df21eb651c7)
![image](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/assets/67663105/9fdbb866-eece-4671-b722-e8db0bed687c)
#### ¿Cómo podemos hacer que la experiencia del almuerzo sea más interactiva y educativa para los niños?
- Tener tema de conversación entre ellos acerca de lo que están comiendo y no permitir el uso de celulares o tablets mientras comen, que la atención se focalice a la comida y lo rico que es alimentarse de manera saludable
- Dar distintas opciones de menú con las calorías y puntaje, dándole mayor puntaje al menú más saludable
- Antes del almuerzo organizar algun juego que sea breve


### Caracterización de usuarios
### Modelo conceptual del problema

## Especificación
### Requerimientos funcionales y no funcionales
#### Requerimientos no funcionales
- RNF_1: Fondo claro con texto oscuro para mejor visibilidad de la interfaz de usuario.
- RNF_2: Persistencia entre las fuentes utilizadas en distintas partes del sitio web (TT Commons Pro en todo el sitio).
- RNF_3: Imagenes en formato webp para optimizar los tiempos de carga del sitio web.
- RNF_4: Integración de la librería de JavaScript Boostrap para la interfaz gráfica.
- RNF_5: Diseño web "responsive" para la adaptación de distintos dispositivos.
- RNF_6: Documentación del proyecto en formato Markdown (.md).
- RNF_7: Utilización de NodeJS para JavaScript back-end.
- RNF_8: Estándar de accesibilidad WCAG para personas con discapacidades.
- RNF_9: Estilo de codificacion Google.
- RNF_10: Utilizacion de GitHub y Git para el versionado y trabajo en equipo. 
 

#### Requerimientos funcionales
- RF_1: Prohibir alimentos: Ofrecer a los padres la opcion de prohibir alimentos en caso de que sus hijos tengan algún problema alimenticio (alergia, intolerancia, etc.).
- RF_2: Visualizar menus disponibles : Permitir a los alumnos visualizar las opciones disponibles para el dia.
- RF_3: Seguimiento de alumnos: La aplicación debe tener la capacidad de mostrar que alumnos elgieron un menú, cuales asistieron al comedor y cuales no.
- RF_4: Notificaciones sobre comida: La aplicación debe notificar a los alumnos cuando su comida esta lista para ser retirada.
- RF_5: Visualizar historial de menús: Permitir a los usuarios, ya sea padres o alumnos, ver el historial de pedidos anteiores.
- RF_6: Opción de utilizar o no el comedor escolar: Permitir a los padres selecionar si su hijo come en el comedor escolar o si el alumno trae comida por su cuenta.

### User stories

#### US_1:
- **Título: Restricción de comidas**
- **Narrativa:** **Como Padre**, **Quiero** poder prohibir ciertos elementos en el menú de mi hijo/hija, **Para** poder evitar algún problema de salud
- **Criterios de aceptación:** Un padre debe tener una interfaz donde pueda selecionar que alimentos puede comer o no su hijo

#### US_2: 
- **Título: Seguimiento de alumnos**
- **Narrativa:** **Como Profesor**, **Quiero** poder hacer un seguimiento de que alumnos estan asistiendo o no al comedor **Para** poder comunicarme con la familia en caso de esté ocurriendo algún problema
- **Criterios de aceptación:** Un profesor debe poder visualizar que alumnos de su grupo estan asistiendo al comedor

#### US_3:
- **Título: Elegir menú**
- **Narrativa:** **Como Alumno**, **Quiero** poder elegir un menú de forma rapida **Para** tener mi comida servida a tiempo
- **Criterios de aceptación:** Se debe poder elegir un menú y pedirlo en 2 minutos o menos.

### US_4:
- **Título: Visualizar perfil**
- **Narrativa:** **Como user**, **Quiero** poder visualizar mi información basica de perfil de forma concisa **Para** cambiar algún dato pertinente. Ej. Cambio de contraseña.
- **Criterios de aceptación:** Poder acceder a un menú donde el usuario puede cambiar su perfil en menos de 8 clicks.

### US_5:
- **Titulo: Información nutricional**
- **Narrativa:** **Como padre/tutor**, **Quiero** saber el valor nutricional de la comida de mi hijo/a **Para** estar informado sobre su dieta
- **Criterios de aceptación:** El padre debe tener un menú disponible que muestre el valor nutricional de la comida de su hijo/a.

### Use cases
#### Titulo: Padre elimina opción del menú
| **Actor: Padre/Tutor**                |                                                                                    |
|---------------------------------------|-----------------------------------------------------------------------------------|
| **Acción de los actores**                 | **Respuesta del sistema**                                                     |
| 1. El padre/tutor inicia sesión          | 2. Muestra las comidas, disponibles, imagen de perfil, hijo/as                       |
| 3. Pasar el cursor por encima de comidas | 4. Muestra checkbox para seleccionar el plato                                        |
| 5. Hace click en el botón opciones       | 6. Despliega un menú contextual con opciones                                         |
| 7. Click en prohibir                     | 8. Muestra una pantalla para seleccionar el hijo/as que no se le permitirá ese plato |
| 9. Click en confirmar                    | 10. Aplica los cambios realizados en el menú para los hijos                           |
| Curso alternativo: 1. El padre/tutor no puede iniciar sesión, por lo tanto no puede proseguir. |                                 |
| Curso alternativo: 9. El padre/tutor no seleccionó ninguna comida, el sistema le informa el error. |                             |  

#### Titulo: Alumno elige menú
| **Actor: Alumno**                                                                                                                |                                                                                                            |
|---------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| **Acción de los actores**                                                                                                       | **Respuesta del sistema**                                                                                  |
| 1.El alumno inicia sesión en la aplicación                                                                                      | 2.Muestra la pagina principal con los menúes disponibles para el alumno                                    |
| 3.El alumno clickea un menú                                                                                                     | 4.Muestra submenú con toda la información del menú seleccionado                                            |
| 5.Alumno clickea boton de elegir                                                                                                | 6.Abre una caja de confirmación                                                                            |
| 7.Click en confirmar                                                                                                            | 8.Envia el pedido a la cocina y el alumno recibe feedback de que su pedido fue realizado de forma correcta |
| Cursos Alternativos: 7.1: El usuario clickea cancelar: El sistema vuelve a la pagina anterior donde muestra los menúes a elegir                                                                                                             |


#### Titulo: Profesor pasa lista.

| Actor: Profesor                                                               |                                                                                 |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| 1. El profesor inicia sesión en la plataforma                                 | 2. Muestra menú, imagen de perfil, alumnos, y marcar su presencia en el comedor |
| 3. Click en "tick" o "cruz"                                                   | 4. Marca el estado del alumno en el comedor, si está presente o no.             |
| 5. Botón "confirmar lista"                                                    | 6. Actualiza en el sistema la lista presencial de alumnos.                      |
| Curso alternativo 1:El usuario no puede iniciar sesion, no puede proseguir.   |                                                                                 |
| 3. el usuario no marcó la presencia de todos los alumnos y devuelve un error. |                                                                                 |                                                                              |


### Bocetos de IU
![1](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/assets/67663105/17402db5-672b-4ebd-8648-115ef096031d)
![2](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/assets/67663105/b44c0dbd-22eb-4c9c-88b9-10959a3cfd47)
![3](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/assets/67663105/05185622-8968-475f-a881-53c2b7b9afde)
![4](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/assets/67663105/27c6dd27-630b-4a67-b9ad-4420f02ddd53)
![5](https://github.com/IngSoft-FIS-2024-1/proyecto-m3aan-bafico-lopez/assets/67663105/01411319-d7cf-4346-8e0f-d4ef79018209)

## Validación y verificación
### Verificación
- ¿Estamos construyendo el producto correctamente?
    Si, en base a la entrevista y las encuestas, nuestras ideas se alinean con lo que busca el publico en cuanto a una aplicación de comedor escolar. Además estamos cumpliendo con los estandares y tecnologías que el cliente nos especifica.

### Validación
- ¿Estamos construyendo el producto correcto?
    El objetivo de este proyecto es aportar una mejor experiencia para alumnos, padres y profesores en cuanto a comedores escolares se refiere.
    Por lo tanto, en base a la entrevista y las encuestas realizadas, estamos seguros de que el producto que estamos construyendo es el correcto.

## Reflexión
### Trabajo individual
Juan Martín López:
- Entrevista
- Correcciones en transcripción de entrevista
- User stories
- Use cases
- Tecnicas de elicitación
- Requerimientos funcionales y no funcionales
- Preguntas de encuesta

Luca Bafico:
- Transcripción de entrevista
- Versionado

### Técnicas aplicadas y aprendizajes
A lo largo de este semestre, hemos aprendido valiosas lecciones a la hora de realizar un proyecto, como organizarlo y realizar tareas de la forma más óptima para que el mismo tenga las mayores posiblidades de ser exitoso.
Algunas de las lecciones fueron:
- Manejo de conflictos y manejo general de la herramienta Git y de la plataforma GitHub
- Lenguaje Markdown para la creación de documentación de un proyecto
- Tecnicas de elicitación
- Implementación de Use cases y User stories