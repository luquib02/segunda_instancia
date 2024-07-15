
export class Sistema{
  #alumnos;
  #padres;
  #menus;
  #usuarioActivo;

  constructor(){
    this.#alumnos = [];
    this.#padres = [];
    this.#menus = [];
    this.#usuarioActivo = '';
  }
    
  agregarAlumno(alm){
    this.#alumnos.push(alm);
  }
  selectedMenu(aMenu, anAlumno){
    for (let i = 0; i < this.getAlumnos().length; i++) {
      if (this.getAlumnos()[i] == anAlumno) {
        this.getAlumnos()[i].eligioMenu(aMenu);
        console.log(this.getAlumnos()[i].getMenusElegidos());
      }
    }
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

  selectedProhibitedMenu(aMenu, anAlumno){
    for (let i = 0; i < this.getAlumnos().length; i++) {
      if (this.getAlumnos()[i] == anAlumno) {
        this.getAlumnos()[i].setRestricciones(aMenu);
      }
    }
    console.log(this.getAlumnos())
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
  getAlumnos(){
    return this.#alumnos;
  }
  getPadres(){
    return this.#padres;
  }
  setUsuarioActivo(nombre) {
    this.#usuarioActivo = nombre;
  }
  getUsuarioActivo() {
    return this.#usuarioActivo;
  }
  

}