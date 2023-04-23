import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { COLORS } from '../../utils/theme'

const CARD_HEIGHT = 200

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.primary
  },
  itemContainer: {
    flex: 1,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: COLORS.white,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  itemList: {
    padding: 10
  },
  itemImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
    opacity: 0.7
  },
  itemTitle: {
    fontWeight: 'bold',
    color: '#281e42',
    marginTop: 10,
    marginHorizontal: 10
  },
  itemDate: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#281e42',
    marginBottom: 10,
    marginHorizontal: 10
  },
  titleBox: {
    position: 'absolute',
    top: CARD_HEIGHT - 80,
    left: 16
  }
})
