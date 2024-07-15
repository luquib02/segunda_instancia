/* global $ */
// Yeah had to declare that for the linter not being happy.
import { Sistema } from "../domain/sistema.js";
import { Alumno } from "../domain/alumno.js";
import { Padre } from "../domain/padre.js";
import { Menu} from "../domain/menu.js";
// Most of the comments in here are in English. Why? 
// I'm practicing good commenting for other contributions (Minecraft mods) that I'm doing.
// Declaration of sistema for further use.
const sistema = new Sistema();
// Key variables for DOM manipulation.
const nomUsuario = document.getElementById('txtBox_Usuario');
const contrasenia = document.getElementById('txtBox_Contrasenia')
const btnIniSession = document.getElementById('btn_IniSession');
const btnSiAsiste = document.getElementById('si_Asiste');
const btnNoAsiste = document.getElementById('no_Asiste');
const btn_agregar = document.getElementById('btnAgregar');
const btn_borrar = document.getElementById('btnBorrar');
const cerrarProhibido = document.getElementById('cerrarProhibnido');
const guardarProhibido = document.getElementById('guardarProhibido');
const btnMenuDatos = document.getElementById('btnMenuDatos');
const btn_borrar2 = document.getElementById('btnBorrar2');

// Placeholder users for testing purposes.
const obj1 = new Alumno("Juan","12341234");
const obj2 = new Padre("Federico","vegeta777");
const obj3 = new Alumno("Alberto","44448888");
// Add'em to the system class.
sistema.agregarAlumno(obj1);
sistema.agregarPadre(obj2);
sistema.agregarAlumno(obj3);
obj2.registrarHijo(obj1);

// Placeholder menus for testing purposes.
const menu1 = new Menu("Milanesa de pollo","Pollo rebozado","Pollo,Pan");
const menu2 = new Menu("Carne con Papas","Carne cocida al horno condimentada con especias","Carne, Papas, orégano");
const menu3 = new Menu("Tarta de Fiambre","Tarta con Jamón y queso","Jamón, Queso, Harina");
const menu4 = new Menu("Chop Suey","Vegetales y pollo al wok","Pollo, Verdura, Salsa de Soja");
const menu5 = new Menu("Milanesa de soja","Opcion vegetariana: Soja, pan triturado","Soja, Harina, sal");
// Add'em to the system class.
sistema.agregarMenu(menu1);
sistema.agregarMenu(menu2);
sistema.agregarMenu(menu3);
sistema.agregarMenu(menu4);
sistema.agregarMenu(menu5);
var menus = sistema.getMenu();
// Global variable for storing the child selected by the parent, or the logged in child's name.
var hijo = '';

btn_borrar.addEventListener('click', () => updateProhibitedItems());
function updateProhibitedItems() {
  deleteClassFromHTML('item-prohibido');
  let childObject = sistema.searchChild(hijo);
  for (let i = 0; i < childObject.getRestricciones().length; i++) {
    if (childObject.getRestricciones().length > 0){
      var ul = document.getElementById("listaPlatosProhibidosEnPadre");
      var elementMenu = document.createElement('input');
      elementMenu.type = 'radio';
      elementMenu.className = 'item-prohibido'
      elementMenu.name = "respuestaEliminar";
      elementMenu.id = childObject.getRestricciones()[i];
      var text = document.createElement('label');
      text.className = 'item-prohibido';
      text.innerHTML = childObject.getRestricciones()[i] + " (" + childObject.getRestricciones()[i].getDescripcion() +")" + "<br>" + "Contiene: " + childObject.getRestricciones()[i].getContenido();
      let enter = document.createElement('br')
      enter.className = 'item-prohibido'
      ul.appendChild(elementMenu);
      ul.appendChild(text);
      ul.appendChild(enter);
    } else {
      var ulNotFound = document.getElementById("listaPlatosProhibidosEnPadre");
      var textNotFound = document.createElement('label');
      textNotFound.className = 'item-prohibido';
      textNotFound.style.fontStyle = 'italic';
      textNotFound.innerHTML = 'No hay platos prohibidos.';
      ulNotFound.appendChild(textNotFound);
    }
  }
}
btn_borrar2.addEventListener('click', () => {
  var childObject = sistema.searchChild(hijo);
  for (let i = 0; i < childObject.getRestricciones().length; i++) {
    if (childObject.getRestricciones().length > 0){
      var ele = document.getElementsByName('respuestaEliminar');
      for (let j = 0; j < ele.length; j++) {
        if (ele[j].checked){
          var seleccionado = ele[j].id;
          for (let k = 0; k < childObject.getRestricciones().length; k++) {
            if (childObject.getRestricciones()[k] == seleccionado) {
              childObject.getRestricciones().splice(k, 1);
              console.log(childObject.getRestricciones());
              console.log('estoy entrando acá :) (borrar coso)');
              updateProhibitedItems();
            }
          }
        }
      }}
    deleteClassFromHTML('item-prohibido');
  }
}
);
function createMenuItem(toAppendStuff) {
  // First deletes every ocurrence of a class called placeholder and for the generated stuff
  deleteClassFromHTML('itemmenu');
  // We process the DOM depending user type.
  var parrafo = document.getElementById(toAppendStuff);
  let childObject = sistema.searchChild(hijo);
  console.log(childObject);
  for (let i = 0; i < menus.length; i++) {
    let encontro = false
    for (let j = 0; j  < childObject.getRestricciones().length; j++) {
      if (menus[i] == childObject.getRestricciones()[j]) {
        encontro = true;
      }
    } if (!encontro) {
      var elementMenu = document.createElement('input');
      elementMenu.type = 'radio';
      elementMenu.name = 'respuesta';
      elementMenu.id = menus[i];
      elementMenu.className = 'itemmenu';
      var text = document.createElement('label');
      text.className = 'itemmenu';
      text.innerHTML = menus[i] + " (" + menus[i].getDescripcion() +")" + "<br>" + "Contiene: " + menus[i].getContenido();
      parrafo.appendChild(elementMenu);
      parrafo.appendChild(text)
      let enter = document.createElement('br')
      enter.className = 'itemmenu'
      parrafo.appendChild(enter);
    }
  }
}

function hideModal(modalID){
  document.getElementById(modalID).classList.add('d-none');
  $('.modal-backdrop').remove();
}
cerrarProhibido.addEventListener('click', () => hideModal("ModalAgregarProhibido"));
  
btnSiAsiste.addEventListener('click', () => siAsiste());
btnNoAsiste.addEventListener('click', () => hideModal("ModalAsistencia"));
guardarProhibido.addEventListener('click', () => {
  var ele = document.getElementsByName('respuesta');
  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked){
      var seleccionado = ele[i].id;
      for (let j = 0; j < menus.length; j++) {
        if (menus[j] == seleccionado) {
          if (hijo != ''){
            sistema.selectedProhibitedMenu(menus[j], hijo);
            console.log('estoy entrando acá :)');
            console.log(hijo);
          } else {
            throw new Error('No se ha seleccionado un hijo');
          }
        }
      }
    }
  }
  studientRestrictions(hijo);
}
);
btn_agregar.addEventListener('click', () => {
  if (hijo != ''){
    document.getElementById("ModalAgregarProhibido").classList.add('d-block');
    document.getElementById("ModalAgregarProhibido").classList.remove('d-none');
    createMenuItem("listaPlatosAProhibir");
  }
  else {
    alert('Por favor, seleccione un hijo');
  }
});
btnMenuDatos.addEventListener('click', () =>{
  var ele = document.getElementsByName('respuesta');
  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked){
      var seleccionado = ele[i].id;
      for (let j = 0; j < menus.length; j++) {
        if (menus[j] == seleccionado) {
          sistema.selectedMenu(menus[j], hijo);
          console.log('estoy entrando acá :)');
          console.log(hijo);
          showHistoryOfSelectedMenu(sistema.searchChild(hijo), "listaEleccionesEnAlumno");
        }
      }
    }
  }})
function siAsiste() {
  for (let i = 0; i < sistema.getAlumnos().length; i++) {
    if (sistema.getAlumnos()[i].getNombre() == sistema.getUsuarioActivo()) {
      sistema.getAlumnos()[i].setAsistencia(true);
      document.getElementById('ModalAsistencia').classList.add('d-none');
      $('.modal-backdrop').remove();
    }}
}

function deleteClassFromHTML(className){
  // One of the most used functions in this proyect for DOM manipulation. 
  // Searches for all occurences of a class and removes them.
  const elements = document.getElementsByClassName(className);
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
}
function setSelectedChild(username){
  // sets the global variable hijo to the user selected child, not the most elegant solution I might say. 
  hijo = username;
}
function showChilds (parent){
  for (let i = 0; i < sistema.getPadres().length; i++) {
    if (sistema.getPadres()[i] == parent) {
      for (let j = 0; j < sistema.getPadres()[i].getHijos().length; j++) {
        deleteClassFromHTML("hijos-item");
        //content formatting for list "Hijos".
        var containerHijo = document.createElement('div');
        containerHijo.className = 'hijos-item';
        containerHijo.style = 'display: flex; align-items: left;';
        var img = document.createElement('img');
        img.src = 'https://via.placeholder.com/50';
        img.alt = 'Imagen de ' + sistema.getPadres()[i].getHijos()[j].getNombre();
        img.style = 'width: 50px; height: 50px; margin-right: 10px; margin-left: 10px;';
        var textoContainer = document.createElement('div');
        textoContainer.style = 'display: flex; flex-direction: column;';
        var button = document.createElement('button');
        button.href = '#' + sistema.getPadres()[i].getHijos()[j].getNombre();
        // Largest addEventListener that I've ever seen and written.
        // Makes all the necesary adjustemnts to the section that is going to be shown.
        button.addEventListener('click', function(){showHistoryOfSelectedMenu(sistema.getPadres()[i].getHijos()[j], "listaEleccionesEnPadre"); setSelectedChild(sistema.getPadres()[i].getHijos()[j]);studientRestrictions(hijo);updateProhibitedItems()});
        button.innerHTML = sistema.getPadres()[i].getHijos()[j].getNombre().toUpperCase();
        var asistencias = document.createElement('span');
        // Did the child attend the meal?
        if (sistema.getPadres()[i].getHijos()[j].getAsistencia()){
          asistencias.innerHTML = 'Asistió al comedor';
          asistencias.style = 'font-style: italic; font-size: 14px';
        } else {
          asistencias.innerHTML = 'No asistió al comedor';
          asistencias.style = 'font-style: italic; font-size: 14px';
        }
        // Appending all the generated stuff to the HTML.
        containerHijo.appendChild(img);
        containerHijo.appendChild(textoContainer);
        textoContainer.appendChild(button);
        textoContainer.appendChild(asistencias);
        document.getElementById('sidebar').appendChild(containerHijo);
      }
    }
  }
}

function studientRestrictions(child){
  var childObject = sistema.searchChild(child);
  deleteClassFromHTML("placeholder");
  deleteClassFromHTML('item-prohibido');
  for (let i = 0; i < childObject.getRestricciones().length; i++) {
    if (childObject.getRestricciones().length > 0){
      var ul = document.getElementById("listaPlatosProhibidosEnPadre");
      var elementMenu = document.createElement('li');
      elementMenu.className = 'item-prohibido'
      elementMenu.id = childObject.getRestricciones()[i];;
      elementMenu.innerHTML = childObject.getRestricciones()[i] + " (" + childObject.getRestricciones()[i].getDescripcion() +")" + "<br>" + "Contiene: " + childObject.getRestricciones()[i].getContenido();
      ul.appendChild(elementMenu);
    }
  }
}



// function searchParent(parentName){
//   for (let i = 0; i < sistema.getPadres().length; i++) {
//     if (sistema.getPadres()[i].getNombre() == parentName) {
//       return sistema.getPadres()[i];
//     }
//   }
//   throw new Error('Padre no encontrado.');
// }

function showHistoryOfSelectedMenu(anAlumno, id){
  console.log(id)
  deleteClassFromHTML("placeholder");
  deleteClassFromHTML('item');
  for (let i = 0; i < anAlumno.getMenusElegidos().length; i++) {
    if (anAlumno.getMenusElegidos().length > 0){
      var elementMenu = document.createElement('li');
      elementMenu.className = 'item'
      elementMenu.id = anAlumno.getMenusElegidos()[i];;
      elementMenu.innerHTML = anAlumno.getMenusElegidos()[i] + " (" + anAlumno.getMenusElegidos()[i].getDescripcion() +")" + "<br>" + "Contiene: " + anAlumno.getMenusElegidos()[i].getContenido();
      document.getElementById(id).appendChild(elementMenu);
    }
  }
}

function login(username){
  sistema.setUsuarioActivo(username);
  // for some reason, modal backdrop remains after removing login panel, this force-hides it.
  $('.modal').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
  document.getElementById('btnInicioSesion').classList.add('d-none');
  document.getElementById('navlinks').classList.add('d-none');
  document.getElementById('navlinks2').classList.add('d-none');
  document.getElementById('navbarNav').classList.remove('show');
  document.getElementById('btnCerrarSesion').classList.remove('d-none');
}

btnIniSession.addEventListener('click', () =>{
  if(sistema.loginPadre(nomUsuario.value, contrasenia.value)){
    alert("Usted ha iniciado sesión como Padre con el Usuario: "+ nomUsuario.value +
     " y Contraseña: "+ contrasenia.value);
    /* eslint-disable-next-line*/
    showSection('panel-padre'); // whenever showSection is called, eslint looses it's mind.
    showChilds(nomUsuario.value);
    login(nomUsuario.value);
    deleteClassFromHTML('item-prohibido');
    deleteClassFromHTML('item');

  }else if(sistema.loginAlumno(nomUsuario.value, contrasenia.value)){
    alert("Usted ha iniciado sesión como Alumno con el Usuario: "+ nomUsuario.value +
    " y Contraseña: "+ contrasenia.value);
    hijo = nomUsuario.value;
    sistema.setUsuarioActivo(hijo);
    /* eslint-disable-next-line*/
    showSection('panel-alumnos');
    login(hijo)
    var alumno = sistema.searchChild(hijo);
    showHistoryOfSelectedMenu(alumno, "listaEleccionesEnAlumno");
    createMenuItem("listaMenus");
  }else{
    alert("Usuario o contraseña incorrecto");
    document.getElementById('txtBox_Usuario').style ='animation-name: shake, glow-red; animation-duration: 0.7s, 0.35s; animation-iteration-count: 1, 2;'
    document.getElementById('txtBox_Contrasenia').style ='animation-name: shake, glow-red; animation-duration: 0.7s, 0.35s; animation-iteration-count: 1, 2;'
  }
}
)


