import { Sistema } from "../domain/sistema.js";
import { Menu } from "../domain/menu.js";
const main = new Sistema();
const menu1 = new Menu("Milanesa","Pollo rebozado con Panko","Pollo,Pan");
const menu2 = new Menu("Milanesa","Pollo rebozado con Panko","Pollo,Pan");
const menu3 = new Menu("Milanesa","Pollo rebozado con Panko","Pollo,Pan");
const menu4 = new Menu("Milanesa","Pollo rebozado con Panko","Pollo,Pan");
const menu5 = new Menu("Milanesa","Pollo rebozado con Panko","Pollo,Pan");
main.agregarMenu(menu1);
main.agregarMenu(menu2);
main.agregarMenu(menu3);
main.agregarMenu(menu4);
main.agregarMenu(menu5);
var menus = main.getMenu();
createMenuItem();
function createMenuItem() {
  const element = document.getElementById("historialElecciones");
  element.remove();
  var parrafo = document.getElementById("lista");
  for (let i = 0; i < menus.length; i++) {
    parrafo.innerHTML +="<li>" + menus[i] + " (" + menus[i].getDescripcion() +")" + "</li>";
    parrafo.innerHTML += " CONTIENE: " + menus[i].getContenido();
  }

}