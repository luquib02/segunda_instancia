import {describe, it, expect, beforeEach} from '@jest/globals';
import {Padre} from '../padre.js';
import { Alumno } from '../alumno.js';

describe('Padre', () =>{
  let pad;
  let h1;
  let h2;

  beforeEach(() =>{
    pad = new Padre("Juan", "1234");
    pad.setContrasenia("1234")
    h1 = new Alumno("Alberto", "4");
    h2 = new Alumno("Joaquin", "1");
  });

  it('return correct password', ()=> {
    expect(pad.getContrasenia()).toBe("1234");
  });

  it('return correct user name', ()=> {
    expect(pad.getNombre()).toBe("Juan");
  });
    
  it('return correct quantity of children', ()=> {
    pad.registrarHijo(h1);
    pad.registrarHijo(h2);
    expect(pad.cantidadHijos()).toBe(2);
  })

});