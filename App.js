import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from "./Weather"

const API_KEY = "ad24eed26e521c41d10359d876453544";

export default class App extends React.Component {
  state = {
    isLoaded : false,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position)
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error =>{
        this.setState({
          error:error
        })

      }
    )

  }
  _getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => {console.log(response)
                        return response.json()})
    .then(json =>{ console.log(json) })
  }
  render() {
    const { isLoaded, error } =  this.state;
    console.log(isLoaded)
    return (

      <View style={styles.container}>
        {isLoaded? ( <Weather/>)  : (
            <View style = {styles.loading}>
              <Text style={styles.loadingText}>
              Getting the fucking weather</Text>
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
        )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000'

  },
  errorText:{
    color:"red",
    backgroundColor:"transparent",
    marginBottom:40
  },
  loading:{
    flex:1,
    backgroundColor: '#647084',
    justifyContent: "flex-end",
    paddingLeft: 25

  },
  loadingText:{

    fontSize : 38,
    marginBottom: 100,
    color: '#fff'
  }
});
