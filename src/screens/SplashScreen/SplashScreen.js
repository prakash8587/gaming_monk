import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {styles} from './SplashScreenStyle'
import { StackActions, NavigationActions } from 'react-navigation';
class SpalshScreen extends Component {

  componentDidMount() {
    this.navigateToMovieScreen();
  }

  navigateToMovieScreen = () => {
    setTimeout(() => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'MovieScreen' })],
        });
        this.props.navigation.dispatch(resetAction)
    }, 5000);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/splash.png')}
          style={styles.img}
        />
      </View>
    );
  }
}

export default SpalshScreen;