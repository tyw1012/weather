import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import {Ionicons} from "@expo/vector-icons"

export default class Weather extends Component{
  render(){
    return(
      <LinearGradient
      colors={["#00c6fb", "#005bea"]}
      style={styles.container}>

      <View style={styles.upper}>
      <Ionicons color="white" size={144} name ="ios-rainy" />
      <Text style={styles.temp}>35도</Text>
      </View>

      <View style={styles.lower}>
      <Text style={styles.title}> 오늘의 날씨 난데스까 </Text>
      <Text style={styles.subtitle}>창밖을 보라 </Text>
      </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1
  },
      upper : {
        flex : 1,
        alignItems: "center",
        justifyContent : "center"
      },
          temp :{
            color : "white",
            fontSize : 35,
          },
      lower : {
        flex : 1,
        alignItems: "flex-start",
        justifyContent : "center",
        paddingLeft : 25
      },

          title:{
            backgroundColor : "transparent",
            color: "white",
            fontSize: 38
          },
          subtitle:{
            backgroundColor : "transparent",
            color: "white",
            fontSize: 24
          }
})
