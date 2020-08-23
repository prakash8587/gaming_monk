import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './ListHeaderStyle';

class ListHeader extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.productTitle}>Movie Screen</Text>
      </View>
    );
  }
}

export default ListHeader;
