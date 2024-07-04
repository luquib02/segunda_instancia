export class Usuario{
  #nombre;
  #contrasenia;
  constructor(nombre,contrasenia){
    this.#nombre=nombre;
    this.#contrasenia=contrasenia;
  }

  getNombre() {
    return this.#nombre;
  }
    
  setNombre(nombre) {
    this.#nombre=nombre;
  }
    
  getContrasenia(){
    return this.#contrasenia;
  }
        
  setContrasenia(contrasenia){
    this.#contrasenia=contrasenia;
  }

  contraseniaCorrecta(contrasenia){
    return this.#contrasenia == contrasenia;
  }
}


