import {describe, it, expect, beforeEach} from '@jest/globals';
import { Sistema}  from '../sistema.js';
import { Alumno } from '../alumno.js';
import { Padre } from '../padre.js';
import { Menu } from '../menu.js';

describe('Sistema', () =>{
  let sistema;
  let alm;
  let pad;
  let menu;

  beforeEach(() =>{
    sistema = new Sistema();
    alm = new Alumno("Juan", "1234");
    pad = new Padre("Ignacio", "4321");
    menu = new Menu("Milanesa","Pollo rebozado con Panko","Pollo,Pan");
    sistema.agregarAlumno(alm);
    sistema.agregarPadre(pad);
  });

  it('test login padre true', ()=>{
    expect(sistema.loginPadre("Ignacio","4321")).toBe(true);
  });

  it('test login padre wrong password', ()=>{
    expect(sistema.loginPadre("Ignacio","421")).toBe(false);
  });

  it('test long padre wrong password and username', ()=> {
    expect(sistema.loginPadre("i","1")).toBe(false);
  });

  it('test login alumno true', ()=>{
    expect(sistema.loginAlumno("Juan","1234")).toBe(true);
  });

  it('test login alumno wrong password', ()=>{
    expect(sistema.loginAlumno("Juan", "12")).toBe(false);
  });

  it('test login alumno wrong password and username', ()=>{
    expect(sistema.loginAlumno("a","1")).toBe(false);
  });

  it('return active user', () =>{
    sistema.setUsuarioActivo(alm.getNombre());
    expect(sistema.getUsuarioActivo()).toBe("Juan");
  });

  it('return menus', () =>{
    sistema.agregarMenu(menu);
    expect(sistema.getMenu()[0].getTitulo()).toBe("Milanesa");
  })
});