import { Sistema } from "../domain/sistema.js";
import { Alumno } from "../domain/alumno.js";
import { Padre } from "../domain/padre.js";



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




btnIniSession.addEventListener('click', () =>{
  if(sistema.loginPadre(nomUsuario.value, contrasenia.value)){
    alert("Usted ha iniciado sesión como Padre con el Usuario: "+ nomUsuario.value +
     " y Contraseña: "+ contrasenia.value);
    window.location.href = "panelPadre.html";
  }else if(sistema.loginAlumno(nomUsuario.value, contrasenia.value)){
    alert("Usted ha iniciado sesión como Alumno con el Usuario: "+ nomUsuario.value +
    " y Contraseña: "+ contrasenia.value);
    sistema.setUsuarioActivo(nomUsuario.value);
    window.location.href = "panelAlumno.html";
  }else{
    alert("Usuario o contraseña incorrecto");
    document.getElementById('txtBox_Usuario').style ='animation-name: shake, glow-red; animation-duration: 0.7s, 0.35s; animation-iteration-count: 1, 2;'
    document.getElementById('txtBox_Contrasenia').style ='animation-name: shake, glow-red; animation-duration: 0.7s, 0.35s; animation-iteration-count: 1, 2;'
  }
})


