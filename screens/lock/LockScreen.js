import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, StatusBar, TouchableOpacity, Animated, Alert } from 'react-native';
import moment from 'moment';

const { width, height } = Dimensions.get('window');

export default class LockScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  animatedValue = new Animated.Value(0);

  render() {
    const viewStyles = [styles.container];
    viewStyles.push({
      transform: [{
        translateY: this.animatedValue
      }]
    });
    return (
      <Animated.View style={viewStyles} >
        <SafeAreaView style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <StatusBar barStyle="light-content" hidden={false} />
          <Image
            source={require('../../assets/images/dark/BackgroundWeb.png')}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              width: undefined,
              height: undefined
            }}
          />
          <View style={styles.datetime}>
            <Image
              source={require('../../assets/images/dark/LockedIcon.png')}
              style={{
                width: 23,
                height: 36
              }}
            />
            <Text style={styles.time}>{moment().format('h:mm')}</Text>
            <Text style={styles.date}>{moment().format('dddd, MMMM DD')}</Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/dark/FlashLight.png')}
                style={{
                  width: 50,
                  height: 50
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/dark/Camera.png')}
                style={{
                  width: 50,
                  height: 50
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.swipe}>
            <Text
              style={styles.swipeText}
              onPress={() => Animated.timing(this.animatedValue, { toValue: -height, duration: 250, useNativeDriver: true}).start()}>Tap to open</Text>
          </View>
        </SafeAreaView>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    transform: [{
      translateY: -0 * height
    }],
  },
  datetime: {
    height: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  time: {
    fontFamily: 'SFProDisplay-Thin',
    fontSize: 80,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center'
  },
  date: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 22,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: 0.32
  },
  buttons: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 50,
    flexDirection: 'row',
    marginLeft: 46,
    marginRight: 46,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  swipe: {
    position: 'absolute',
    bottom: 30,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeText: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 17,
    color: '#fff',
    letterSpacing: -0.41,
    textAlign: 'center',
    lineHeight: 22
  }
});
