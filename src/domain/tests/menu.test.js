import {describe, it, expect, beforeEach} from '@jest/globals';
import { Menu } from "../menu";

describe('Menu', () =>{
  let menu1
   
  beforeEach(()=>{
    menu1 = new Menu("Milanesa","Pollo rebozado con Panko","Pollo,Pan");
  });

  it('return title', ()=> {
    expect(menu1.getTitulo()).toBe("Milanesa");
  });

  it('return description', ()=>{
    expect(menu1.getDescripcion()).toBe("Pollo rebozado con Panko");
  });
   
  it('return ingredients', ()=>{
    expect(menu1.getContenido()).toBe("Pollo,Pan");
  })
});