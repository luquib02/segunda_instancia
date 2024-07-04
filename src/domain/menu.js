export class Menu{
  #titulo;
  #descripcion;
  #contiene;

  constructor(titulo, descripcion, contiene){
    this.#titulo = titulo;
    this.#descripcion = descripcion;
    this.#contiene = contiene;
  }

  getDescripcion(){
    return this.#descripcion;
  }

  getContenido(){
    return this.#contiene;
  }

  getTitulo(){
    return this.#titulo;
  }
    
  toString(){
    return this.#titulo;
  }
}