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
  const elements = document.getElementsByClassName("placeholder");
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
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

function childPlates(child){
  var parrafo = document.getElementById("listaMenus");
    for (let i =0; i < sistema.alumnos.menuelegido.length; i++){
      var spacing = document.createElement('p');
      var elementElegidos = document.createElement('li');
      var text = document.createElement('label');
      text.innerHTML = sistema.alumnos[i].menuelegido[i]
    }
}
    



function login() {
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
    login();

  }else if(sistema.loginAlumno(nomUsuario.value, contrasenia.value)){
    alert("Usted ha iniciado sesión como Alumno con el Usuario: "+ nomUsuario.value +
    " y Contraseña: "+ contrasenia.value);
    sistema.setUsuarioActivo(nomUsuario.value);
    showSection('panel-alumnos');
    login();
  }else{
    alert("Usuario o contraseña incorrecto");
    document.getElementById('txtBox_Usuario').style ='animation-name: shake, glow-red; animation-duration: 0.7s, 0.35s; animation-iteration-count: 1, 2;'
    document.getElementById('txtBox_Contrasenia').style ='animation-name: shake, glow-red; animation-duration: 0.7s, 0.35s; animation-iteration-count: 1, 2;'
  }
}
)
function setMenuOnGUI() {
  
}


