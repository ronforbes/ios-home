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
        onPress={() => {
          Linking.openURL(app.link);
        }}
      >
        <Image source={app.icon} style={styles.dockIcon} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  dockIcon: {
    width: 60,
    height: 60,
    marginLeft: 22,
    marginRight: 22
  }
});
