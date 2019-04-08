/**
* @format
* @flow
*/

import { observable, action, computed, decorate } from 'mobx'

export default class Itens {

  //Lista de produtos
  produtos = ['Smartphone', 'Microondas', 'Fogão', 'Geladeira', 'Guarda-roupas', 'Bicicleta', 'Freezer', 'Lava-louças']

  //Categoria de estados A
  catA = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Dstrito Federal', 'Espírito Santo', 'Goiás']

  //Categoria de estados B
  catB = ['Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí']

  //Categoria de estados C
  catC = ['Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']


}

decorate(Itens, {
    produtos: observable,
    catA: observable,
    catB: observable,
    catC: observable
});
