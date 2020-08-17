import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import Application from '../../components/Application';
import DockApplication from '../../components/DockApplication';

let apps = [{
  name: 'Facebook',
  icon: require('../../assets/images/dark/Graphics/AppIcons/Facebook.png'),
  link: 'https://www.facebook.com/ronaldomegaforbesjr'
}, {
  name: 'Instagram',
  icon: require('../../assets/images/dark/Graphics/AppIcons/Instagram.png'),
  link: 'https://www.instagram.com/ronforbes/'
}, {
  name: 'Twitter',
  icon: require('../../assets/images/dark/Graphics/AppIcons/Twitter.png'),
  link: 'https://twitter.com/ronforbes'
}, {
  name: 'LinkedIn',
  icon: require('../../assets/images/dark/Graphics/AppIcons/LinkedIn.png'),
  link: 'https://www.linkedin.com/in/ronforbes/'
}, {
  name: 'Medium',
  icon: require('../../assets/images/dark/Graphics/AppIcons/Medium.png'),
  link: 'https://medium.com/@ronforbes'
}, {
  name: 'GitHub',
  icon: require('../../assets/images/dark/Graphics/AppIcons/GitHub.png'),
  link: 'https://github.com/ronforbes'
}, {
  name: 'YouTube',
  icon: require('../../assets/images/dark/Graphics/AppIcons/YouTube.png'),
  link: 'https://www.youtube.com/channel/UCfXOv8ywbWrPgN-CnQ0wmAA?view_as=subscriber'
}, {
  name: 'Reddit',
  icon: require('../../assets/images/dark/Graphics/AppIcons/Reddit.png'),
  link: 'https://www.reddit.com/user/ronforbes'
}, {
  name: 'Spotify',
  icon: require('../../assets/images/dark/Graphics/AppIcons/Spotify.png'),
  link: 'https://open.spotify.com/user/ronforbes'
}];

let dockApps = [{
  icon: require('../../assets/images/dark/Graphics/AppIcons/Safari.png'),
  link: 'https://google.com'
}, {
  icon: require('../../assets/images/dark/Graphics/AppIcons/AppStore.png'),
  link: 'https://apple.com'
}, {
  icon: require('../../assets/images/dark/Graphics/AppIcons/Mail.png'),
  link: 'mailto:ron@ronforbes.me'
}, {
  icon: require('../../assets/images/dark/Graphics/AppIcons/Settings.png'),
  link: 'https://github.com/ronforbes/ios-home'
}];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" hidden={false} />
        <Image
          source={require('../../assets/images/dark/BackgroundWeb.png')}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            flex: 1,
            width: undefined,
            height: undefined
          }}
        />
        <View style={styles.apps}>
        {
          apps.map((app, i) => {
            return <Application app={app} key={i} />;
          })
        }
        </View>
        <View style={styles.dock}>
        {
          dockApps.map((app, i) => {
            return <DockApplication app={app} key={i} />;
          })
        }
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  apps: {
    //width: 329,
    //height: 485,
    marginTop: 28,
    marginLeft: 22,
    marginRight: 22,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
    //backgroundColor: '#fff'
  },
  dock: {
    marginLeft: 0,
    marginRight: 0,
    position: 'absolute',
    //left: 0,
    //right: 0,
    bottom: 30,
    //width: 355,
    height: 94,
    borderRadius: 31,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});
