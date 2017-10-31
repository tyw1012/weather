import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from "./Weather"
export default class App extends React.Component {
  state = {isLoaded : true};
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded? ( <Weather/>)  : (
            <View style = {styles.loading}>
              <Text style={styles.loadingText}>Getting the fucking weather</Text>
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