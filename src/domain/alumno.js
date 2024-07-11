import { Usuario } from "./usuario.js";

export class Alumno extends Usuario{
  #asistencia = [];
  #menuelegido = [];
  #restricciones = [];

  getAsistencia(){
    return this.#asistencia;
  }

  setAsistencia(asistio){
    this.#asistencia.push(asistio);
  }

  getMenusElegidos(){
    return this.#menuelegido;
  }

  eligioMenu(menu){
    this.#menuelegido.push(menu);
  }

  setRestricciones(restricciones){
    this.#restricciones.push(restricciones);
  }

  getRestricciones(){
    return this.#restricciones;
  }

  toString(){
    return this.getNombre();
  }

}