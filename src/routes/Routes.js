/**
* @format
* @flow
*/

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home'
import TelaLista from '../screens/TelaLista'
import TelaGrid from '../screens/TelaGrid'
import TelaCarrossel from '../screens/TelaCarrossel'


const Routes = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Vendas'
    }
  },
  TelaLista: {
    screen: TelaLista,
    navigationOptions: {
      title: 'Resultado'
    }
  },
  TelaGrid: {
    screen: TelaGrid,
    navigationOptions: {
      title: 'Resultado'
    }
  },
  TelaCarrossel: {
    screen: TelaCarrossel,
    navigationOptions: {
      title: 'Resultado'
    }
  }
})

export default createAppContainer(Routes)