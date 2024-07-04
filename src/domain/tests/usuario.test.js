import {describe, it, expect, beforeEach} from '@jest/globals';
import {Usuario} from '../usuario.js';

describe('Usuario', () =>{
  let usu;

  beforeEach(() =>{
    usu = new Usuario("Juan", "1234");
    usu.setContrasenia("1234")
  });

  it('return correct password', ()=> {
    expect(usu.getContrasenia()).toBe("1234");
  });

  it('return correct user name', ()=> {
    expect(usu.getNombre()).toBe("Juan");
  });

  it('correct password', ()=> {
    expect(usu.contraseniaCorrecta("1234")).toBe(true);
  })

  it('incorrect password', ()=>{
    expect(usu.contraseniaCorrecta("12")).toBe(false);
  })
    
  it('change name', () => {
    usu.setNombre("Franco");
    expect(usu.getNombre()).toBe("Franco");
  })

});