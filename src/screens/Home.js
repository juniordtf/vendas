/**
 * @format
 * @flow
 */
import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  Picker,
  FlatList,
  TextInput,
  TouchableHighlight
} from "react-native";
import { observable, decorate } from "mobx-react/native";

/* style and state */
import styles from "./style";
import controller from "./Controller";
import { toJS } from "mobx";

//Tela Home com a opção para o usuário escolher o estado brasileiro em que ele encontra

type Props = {};
export default class Home extends Component<Props> {
  constructor() {
    super();
    this.state = {
      PickerValue: ""
    };
  }

  clickme = () => {
    var data = this.state.PickerValue;
    if (data == "") {
      alert("Por favor, selecione uma opção!");
    } else {
			this.props.navigation.navigate(controller.findEstado(data));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Picker
          style={{ width: "100%" }}
          selectedValue={this.state.PickerValue}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ PickerValue: itemValue })
          }
        >
          <Picker.Item label="Selecione seu estado" value="" />
          <Picker.Item label="Minas Gerais" value="Minas Gerais" />
          <Picker.Item label="Bahia" value="Bahia" />
          <Picker.Item label="Rio de Janeiro" value="Rio de Janeiro" />
					<Picker.Item label="Espírito Santo" value="Espírito Santo" />
					<Picker.Item label="Piauí" value="Piauí" />
					<Picker.Item label="Amazonas" value="Amazonas" />


        </Picker>
        <Button title="Avançar" onPress={this.clickme} />
      </View>
    );
  }
}
