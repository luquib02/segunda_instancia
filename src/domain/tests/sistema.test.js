import {describe, it, expect, beforeEach} from '@jest/globals';
import {jest} from '@jest/globals'
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
  });
  it('should throw an error when anAlumno is undefined', () => {
    expect(() => sistema.selectedProhibitedMenu('menu', undefined)).toThrow('No se ha seleccionado un alumno, o el menú es vacío.');
  });
  it('should throw an error when aMenu is empty', () => {
    expect(() => sistema.selectedProhibitedMenu('{}', undefined)).toThrow('No se ha seleccionado un alumno, o el menú es vacío.');
  });
  it('should set the prohibited menus for the selected student', () => {
    sistema.selectedProhibitedMenu(menu, alm.getNombre());
    expect(alm.getRestricciones()).toEqual([menu]);
  });
  it('should add the selected menu to the students list of chosen menus', () => {
    sistema.selectedMenu(menu, alm);
    expect(alm.getMenusElegidos()).toEqual([menu]);
  });
  it('should add a new student to the list of students', () => {
    expect(sistema.getAlumnos()).toContain(alm);
  });
  it('searchChild should return the student object when the child name is found', () => {
    const alumno1 = new Alumno('Alice');
    const alumno2 = new Alumno('Bob');
    sistema.agregarAlumno(alumno1);
    sistema.agregarAlumno(alumno2);
  
    const result = sistema.searchChild('Bob');
  
    expect(result).toEqual(alumno2);
  });
  
  // Test case 2: Testing when the child name is not found in the list of students
  it('searchChild should throw an error when the child name is not found', () => {
    const alumno1 = new Alumno('Alice');
    sistema.agregarAlumno(alumno1);
  
    expect(() => sistema.searchChild('Bob')).toThrowError('Alumno / Hijo no encontrado.');
  });
  it('should return the correct array of fathers', () => {
    const padre1 = new Padre('John');
    const padre2 = new Padre('Doe');
    sistema.agregarPadre(padre1);
    sistema.agregarPadre(padre2);

    expect(sistema.getPadres()).toEqual([pad, padre1, padre2]);
  });
  it('should return undefined if no fathers are added', () => {
    expect(sistema.getPadres()[2]).toEqual(undefined);
  });
  it('logs the menus selected by the alumno', () => {
    const logSpy = jest.spyOn(console, 'log');
    sistema.selectedMenu(menu, alm);
    expect(logSpy).toHaveBeenCalledWith(alm.getMenusElegidos());
  });
  it('should add the selected menu to the students list of chosen menus', () => {
    // Adding the student to the system
    sistema.agregarAlumno(alm);
    
    // Calling the selectedMenu function
    sistema.selectedMenu(menu, alm);
    expect(alm.getMenusElegidos()).toEqual([menu, menu]);
  });
  it('case when the student is not in the system', () => {
    expect(() => sistema.selectedMenu(menu, 'Bob Esponja')).toThrowError('Alumno / Hijo no encontrado.');
  });
  it('case when the student is not in the system', () => {
    expect(() => sistema.selectedProhibitedMenu(menu, 'Bob Esponja')).toThrowError('Alumno / Hijo no encontrado.');
  });
  it('should return the name of the parent', () => {
    const parent = new Padre('John Doe');
    expect(parent.toString()).toBe('John Doe');
  });
  it('should return an empty array if no childs have been registered', () => {
    const padre = new Padre("Juan", "1234");
    expect(padre.getHijos()).toEqual([]);
  });
});