import React, { useState } from 'react'
import { SafeAreaView, View, ActivityIndicator } from 'react-native'
import { styles } from './EventDetailWebScreen.styles'
import WebView from 'react-native-webview'

export const EventDetailWebScreen = ({ route }) => {
  const { url } = route.params
  const [visible, setVisible] = useState(false)
  const ActivityIndicatorElement = () => {
    return (
      <View style={styles.activityIndicatorStyle}>
        <ActivityIndicator color='purple' size='large' />
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: url }}
        javaScriptEnabled
        domStorageEnabled
        onLoadStart={() => setVisible(true)}
        onLoad={() => setVisible(false)}
      />
      {visible ? <ActivityIndicatorElement /> : null}
    </SafeAreaView>
  )
}
