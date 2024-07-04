import {describe, it, expect, beforeEach} from '@jest/globals';
import {Alumno} from '../alumno.js';
import { Menu } from '../menu.js';

describe('Alumno', () =>{
  let alm;
  let menu1;

  beforeEach(() =>{
    alm = new Alumno("Juan", "1234");
    alm.setContrasenia("1234");
    menu1 = new Menu("Milanesa", "Pollo rebozado en Panko", "Pollo,Pan")
  });

  it('return correct password', ()=> {
    expect(alm.getContrasenia()).toBe("1234");
  });

  it('return correct user name', ()=> {
    expect(alm.getNombre()).toBe("Juan");
  });

  it('return chosen menú', ()=> {
    alm.eligioMenu(menu1);
    expect(alm.getMenusElegidos()[0].toString()).toBe("Milanesa");
  });

  it('return correct restrinctions', ()=>{
    alm.setRestricciones("Pollo");
    alm.setRestricciones("Arroz");
    expect(alm.getRestricciones()[1]).toBe("Arroz");
  });

  it('return a correct value from assitance array', ()=>{
    alm.setAsistencia(false);
    alm.setAsistencia(true);
    alm.setAsistencia(true);
    expect(alm.getAsistencia()[2]).toBe(true);
  })
});