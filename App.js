import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

import LockScreen from './screens/lock/LockScreen';
import Home from './screens/home/Home';

const customFonts = {
  'SFProDisplay-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
  'SFProDisplay-Thin': require('./assets/fonts/SF-Pro-Display-Thin.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Bold.otf')
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assetsLoaded: false
    };
  }

  async _loadAssetsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ assetsLoaded: true });
  }

  componentDidMount() {
    this._loadAssetsAsync();
  }

  render() {
    if(this.state.assetsLoaded) {
      return (
        <View style={{ flex: 1, overflow: 'hidden' }}>
          <Home />
          <LockScreen />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="small" />
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
