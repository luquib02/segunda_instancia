import { Sistema } from "../domain/sistema.js";
import { Alumno } from "../domain/alumno.js";
import { Padre } from "../domain/padre.js";
import { Menu} from "../domain/menu.js";

const sistema = new Sistema();
const btnIniSession = document.getElementById('btn_iniSession');
const nomUsuario = document.getElementById('txtBox_Usuario');
const contrasenia = document.getElementById('txtBox_Contrasenia')
const obj1 = new Alumno("Juan","12341234");
const obj2 = new Padre("Federico","vegeta777");
const obj3 = new Alumno("Alberto","44448888");
sistema.agregarAlumno(obj1);
sistema.agregarPadre(obj2);
sistema.agregarAlumno(obj3);
obj2.registrarHijo(obj1);
var nombre;

const menu1 = new Menu("Milanesa","Pollo rebozado con Panko","Pollo,Pan");
const menu2 = new Menu("Milanesa","Pollo rebozado con Panko","Pollo,Pan");
const menu3 = new Menu("Milanesa","Pollo rebozado con Panko","Pollo,Pan");
const menu4 = new Menu("Milanesa","Pollo rebozado con Panko","Pollo,Pan");
const menu5 = new Menu("Milanesa","Pollo rebozado con Panko","Pollo,Pan");
sistema.agregarMenu(menu1);
sistema.agregarMenu(menu2);
sistema.agregarMenu(menu3);
sistema.agregarMenu(menu4);
sistema.agregarMenu(menu5);
var menus = sistema.getMenu();
createMenuItem();
function createMenuItem() {
  // First deletes every ocurrence of a class called placeholder.
  // We process the DOM depending user type.
    var parrafo = document.getElementById("listaMenus");
    for (let i = 0; i < menus.length; i++) {
      var elementMenu = document.createElement('input');
      elementMenu.type = 'radio';
      elementMenu.name = 'respuesta';
      elementMenu.id = menus[i];
      var text = document.createElement('label');
      text.innerHTML = menus[i] + " (" + menus[i].getDescripcion() +")" + "<br>" + "Contiene: " + menus[i].getContenido();
      parrafo.appendChild(elementMenu);
      parrafo.appendChild(text)
      parrafo.appendChild(document.createElement('br'));
  }
  }
function deleteClassFromHTML(className){
  const elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}
function showChilds (parent){
  deleteClassFromHTML("hijos-item");
  for (let i = 0; i < sistema.getPadres().length; i++) {
    if (sistema.getPadres()[i] == parent) {
      //debugging
      console.log(sistema.getPadres()[i].getHijos());
      // it works :D
      for (let j = 0; j < sistema.getPadres()[i].getHijos().length; j++) {
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
        button.addEventListener('click', function(){showHistoryOfSelectedMenu(sistema.getPadres()[i].getHijos()[j])});
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
        containerHijo.appendChild(img);
        containerHijo.appendChild(textoContainer);
        textoContainer.appendChild(button);
        textoContainer.appendChild(asistencias);
        document.getElementById('sidebar').appendChild(containerHijo);
      }
    }
  }
}

function selectedMenu(aMenu, anAlumno){
  for (let i = 0; i < sistema.getAlumnos().length; i++) {
    if (sistema.getAlumnos()[i] == anAlumno) {
      sistema.getAlumnos()[i].eligioMenu(aMenu);
      console.log(sistema.getAlumnos()[i].getMenusElegidos());
    }
  }
}
function searchParent(parentName){
  for (let i = 0; i < sistema.getPadres().length; i++) {
    if (sistema.getPadres()[i].getNombre() == parentName) {
      return sistema.getPadres()[i];
    }
  }
}
function showHistoryOfSelectedMenu(anAlumno){
  for (let i = 0; i < anAlumno.getMenusElegidos().length; i++) {
    if (anAlumno.getMenusElegidos().length > 0){
      deleteClassFromHTML("placeholder");
      var ul = document.getElementById("lista")
      var elementMenu = document.createElement('li');
      elementMenu.id = anAlumno.getMenusElegidos()[i];;
      elementMenu.innerHTML = anAlumno.getMenusElegidos()[i] + " (" + anAlumno.getMenusElegidos()[i].getDescripcion() +")" + "<br>" + "Contiene: " + anAlumno.getMenusElegidos()[i].getContenido();
      ul.appendChild(elementMenu);
      ul.appendChild(document.createElement('br'));
    }

  }
}
// SiAsiste.addEventListener('click', () =>{

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
    showSection('panel-padre');
    showChilds(nomUsuario.value);
    login();

  }else if(sistema.loginAlumno(nomUsuario.value, contrasenia.value)){
    alert("Usted ha iniciado sesión como Alumno con el Usuario: "+ nomUsuario.value +
    " y Contraseña: "+ contrasenia.value);
    nombre = nomUsuario.value;
    sistema.setUsuarioActivo(nombre);
    showSection('panel-alumnos');
    login();
  }else{
    alert("Usuario o contraseña incorrecto");
    document.getElementById('txtBox_Usuario').style ='animation-name: shake, glow-red; animation-duration: 0.7s, 0.35s; animation-iteration-count: 1, 2;'
    document.getElementById('txtBox_Contrasenia').style ='animation-name: shake, glow-red; animation-duration: 0.7s, 0.35s; animation-iteration-count: 1, 2;'
  }
}
)
btnMenuDatos.addEventListener('click', () =>{
  var ele = document.getElementsByName('respuesta');
  for (let i = 0; i < ele.length; i++) {
      if (ele[i].checked){
          var seleccionado = ele[i].id;
          for (let j = 0; j < menus.length; j++) {
            if (menus[j] == seleccionado) {
              selectedMenu(menus[j], nombre);
              console.log('estoy entrando acá :)');
              console.log(nombre);
            }
            }
  }
}})
function setMenuOnGUI() {
  
}


