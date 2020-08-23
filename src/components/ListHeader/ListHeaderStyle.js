import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#0065ff',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  cartCount: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderRadius: 8,
    borderColor: '#fff',
    borderWidth: 1,
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 5,
  },
  cartCountText: {
    color: '#fff',
    fontSize: 10,
  },
  cartImage: {width: 30, height: 30, marginRight: 15},
  productTitle: {color: '#FFF', fontSize: 17},
  cartButton: {position:'absolute', right: 10}
});
