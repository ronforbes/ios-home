import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let app = this.props.app;
    return (
      <TouchableOpacity
        style={styles.app}
        onPress={() => {
          Linking.openURL(app.link);
        }}
      >
        <View style={styles.app}>
          <Image
            source={app.icon}
            style={styles.appIcon}/>
          <Text style={styles.appText}>{app.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    width: 72,
    height: 79,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 27,
    //backgroundColor: '#fff'
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  appIcon: {
    width: 60,
    height: 60,
    borderRadius: 10
  },
  appText: {
    //fontFamily: 'SFProText-Regular',
    fontSize: 12,
    color: '#fff',
    letterSpacing: 0
  }
});
