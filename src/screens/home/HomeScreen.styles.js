import { StyleSheet, StatusBar } from 'react-native'
import { FONT_SIZE, COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  },
  titleContainer: {
    padding: 20,
    opacity: 0.6,
    position: 'absolute',
    margin: 20
  },
  carouselContainer: {
    height: 500
  },
  descContainer: {
    marginTop: -10,
    padding: 20
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 10
  },
  sub_card: {
    backgroundColor: 'rgba(250, 245, 255, 1)',
    borderRadius: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 20,
    opacity: 0.6
  },
  title: {
    fontSize: FONT_SIZE.xl,
    fontWeight: 'bold',
    color: COLORS.inactive,
    width: '100%',
    marginLeft: 25
  },
  sub_title: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
    color: COLORS.text,
    width: '100%',
    textAlign: 'center',
    padding: 20
  },
  user_title: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
    color: COLORS.text,
    width: '100%'
  },
  itemList: {
    // backgroundColor: 'gray'
  },
  event_card: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 5,
    opacity: 0.6
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
