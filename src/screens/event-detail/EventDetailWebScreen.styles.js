import { StyleSheet, StatusBar } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  }
})
