/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

var SearchPage = require('./SearchPage');

var PropertyFinder = React.createClass({
  render (){
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component : SearchPage,
          title : 'Property Finder',
        }}/>
    );
  }
})

var styles = StyleSheet.create({
  text : {
    color : 'black',
    backgroundColor : 'white',
    fontSize : 30,
    margin : 80
  },
  container : {
    flex : 1
  }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
