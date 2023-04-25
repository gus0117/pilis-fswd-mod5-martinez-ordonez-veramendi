import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    marginTop: StatusBar.currentHeight
  },
  imageContainer: {
    height: 300
  },
  image: {
    width: Dimensions.get('screen').width,
    height: 300
  },
  textContainer: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.secondaty,
    marginBottom: 10
  },
  location: {
    fontSize: 18,
    color: COLORS.inactive,
    marginBottom: 5
  },
  date: {
    fontSize: 18,
    color: COLORS.inactive,
    marginBottom: 5
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rating: {
    marginLeft: 8,
    color: COLORS.blueSky,
    fontSize: FONT_SIZE.md
  },
  description: {
    fontSize: 18,
    color: COLORS.inactive,
    lineHeight: 26,
    marginTop: 10
  },
  map: {
    height: 250,
    marginVertical: 20,
    borderRadius: 10
  },
  webButton: {
    textAlign: 'center',
    backgroundColor: COLORS.secondaty,
    color: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 100,
    marginTop: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  bookButton: {
    paddingTop: 15
  }
})
