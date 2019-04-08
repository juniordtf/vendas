
/**
* @format
* @flow
*/

import { observable, action, computed, decorate } from 'mobx'
import store from '../stores'



class Controller {

  //Para buscar a lista de produtos na store
  get items() {
    return store.itens.produtos
  }

  //Para mostrar a tela conforme a categoria em que se encontra o estado
  findEstado(data) {
    if (store.itens.catA.indexOf(data) != -1){
      return "TelaCarrossel";
    } else if (store.itens.catB.indexOf(data) != -1) {
      return "TelaGrid";
    } else if (store.itens.catC.indexOf(data) != -1) {
      return "TelaLista";
    } else{
      return "Nada";
    }
  }

}

decorate(Controller, {
    items: computed,
    findEstado: action
});


export default new Controller()
