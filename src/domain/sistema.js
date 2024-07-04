
export class Sistema{
  #alumnos;
  #padres;
  #menus;
  #usuarioActivo

  constructor(){
    this.#alumnos = [];
    this.#padres = [];
    this.#menus = [];
    this.usuarioActivo = '';
  }
    
  agregarAlumno(alm){
    this.#alumnos.push(alm);
  }

  agregarPadre(pad){
    this.#padres.push(pad);
  }

  loginAlumno(nombre, contrasenia){
    let correcto=false;
    for(let i=0; i<this.#alumnos.length; i++){
      let alum = this.#alumnos[i];
      if(alum.getNombre() == nombre){
        correcto= alum.getContrasenia() == contrasenia;
      }
    }
    return correcto;
  }

  loginPadre(nombre, contrasenia){
    let correcto=false;
    for(let i=0; i<this.#padres.length; i++){
      let pad = this.#padres[i];
      if(pad.getNombre() == nombre){
        (correcto=pad.getContrasenia() == contrasenia);
      }
    }
    return correcto;
  }
  
  agregarMenu(menu){
    this.#menus.push(menu);
  }

  getMenu(){
    return this.#menus;
  }
  setUsuarioActivo(nombre) {
    this.#usuarioActivo = nombre;
  }
  getUsuarioActivo() {
    return this.#usuarioActivo;
  }

}