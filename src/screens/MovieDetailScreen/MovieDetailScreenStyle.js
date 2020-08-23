import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFF',
  },
  imageOuterView: {flex: 2},
  img: {flex: 1},
  bottomView: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: -40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
  },
  backArrow: {
    position: 'absolute',
    zIndex: 1,
    top: Platform.OS === 'android' ? 20 : 60,
    left: 16,
    height: 30,
    width: 30,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImg: {height: 16, width: 16},
  titleText: {
    fontSize: 24,
    color: '#0065FF',
    fontWeight: '500',
    marginTop: 8,
    textDecorationLine:'underline',
    fontWeight: 'bold'
  },
  smallIconOuterView: {
    flexDirection: 'row',
    marginTop: -25,
    alignSelf: 'flex-end',
  },
  whiteCircle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
  },
  icon: {height: 20, width: 20},
  name: {fontWeight: 'bold', fontSize: 18},
  description: {
    lineHeight: 22,
    fontSize: 16,
    color: '#404040',
    marginTop: 16,
    height: '34%',
  },
  releaseContainer: {
    flexDirection: 'row'
  },
  releaseText: { fontWeight: 'bold', fontSize: 16 },
  releaseDate: { fontSize: 16, marginLeft: 8}
});