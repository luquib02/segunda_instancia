import { Usuario } from "./usuario.js";

export class Padre extends Usuario{
  #hijos = [];


  cantidadHijos() {
    return this.#hijos.length;
  } 

  registrarHijo(Alumno){
    this.#hijos.push(Alumno);
  }
  toString(){
    return this.getNombre();
  }
  getHijos(){
    return this.#hijos;
  }
}

