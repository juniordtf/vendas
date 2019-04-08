/**
* @format
* @flow
*/
import React, { Component } from 'react'
import { Button, View, Text, FlatList, TextInput, TouchableHighlight } from 'react-native'
import { observer } from 'mobx-react/native'



/* style and state */
import styles from './style'
import controller from './Controller'
import { toJS } from 'mobx';

type Props = {}
export default class TelaLista extends Component<Props> {

  renderItem = ({ item }) => {
    return (
      <View>
       <Text style={styles.label}>{item}</Text>
       <View style={styles.line}/>
      </View>
    )
  }

  render () {

    console.log(JSON.stringify((controller.items)))
    return (
      
     <View style={{flex: 1}}>
      <FlatList
        data={controller.items}
        extraData={toJS(controller.items)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItem}
      />
     </View>
      
    )
  }
}
