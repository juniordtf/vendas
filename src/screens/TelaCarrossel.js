import React, { Component } from "react";
import {View,Text,StyleSheet} from "react-native";
import Swiper from "react-native-web-swiper";

/* style and state */
import controller from './Controller'
import { toJS } from 'mobx';

const data = controller.items;


type Props = {}
export default class TelaCarrossel extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Swiper>
                    <View style={[styles.slideContainer,styles.slide1]}>
                        <Text>{data[0]}</Text>
                    </View>
                    <View style={[styles.slideContainer,styles.slide2]}>
                        <Text>{data[1]}</Text>
                    </View>
                    <View style={[styles.slideContainer,styles.slide3]}>
                        <Text>{data[2]}</Text>
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                        <Text>{data[3]}</Text>
                    </View>
                    <View style={[styles.slideContainer,styles.slide2]}>
                        <Text>{data[4]}</Text>
                    </View>
                    <View style={[styles.slideContainer,styles.slide3]}>
                        <Text>{data[5]}</Text>
                    </View>
                    <View style={[styles.slideContainer,styles.slide1]}>
                        <Text>{data[6]}</Text>
                    </View>
                    <View style={[styles.slideContainer,styles.slide2]}>
                        <Text>{data[7]}</Text>
                    </View>
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  slideContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"

  },
  slide1: {
      backgroundColor: "rgba(20,20,200,0.3)"
  },
  slide2: {
      backgroundColor: "rgba(20,200,20,0.3)"
  },
  slide3: {
      backgroundColor: "rgba(200,20,20,0.3)"
  },
});