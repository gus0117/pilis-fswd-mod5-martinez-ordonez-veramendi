import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Animated
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from '../../utils/theme'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const ANCHO_CONTENEDOR = width * 0.7
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2
const ESPACIO = 10
const ALTURA_BACKDROP = height * 0.5

function Backdrop ({ scrollX, images }) {
  return (
    <View
      style={[
        {
          position: 'absolute',
          height: ALTURA_BACKDROP,
          top: 0,
          width
        },
        StyleSheet.absoluteFillObject
      ]}
    >
      {images.map((imag, index) => {
        const inputRange = [
          (index - 1) * ANCHO_CONTENEDOR,
          index * ANCHO_CONTENEDOR,
          (index + 1) * ANCHO_CONTENEDOR
        ]

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0]
        })
        return (
          <Animated.Image
            key={index}
            source={{ uri: `https://drive.google.com/uc?id=${imag}` }}
            style={[
              { width, height: ALTURA_BACKDROP, opacity },
              StyleSheet.absoluteFillObject
            ]}
          />
        )
      })}
      <LinearGradient
        colors={['transparent', 'white']}
        style={{
          width,
          height: ALTURA_BACKDROP,
          position: 'absolute',
          bottom: 0
        }}
      />
    </View>
  )
}

export const Carrusel = ({ images }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current
  return (
    <SafeAreaView style={styles.container}>
      <Backdrop scrollX={scrollX} images={images} />
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToAlignment='start'
        contentContainerStyle={{
          paddingTop: 200,
          paddingHorizontal: ESPACIO_CONTENEDOR
        }}
        snapToInterval={ANCHO_CONTENEDOR}
        decelerationRate={0}
        scrollEventThrottle={16}
        data={images}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ANCHO_CONTENEDOR,
            index * ANCHO_CONTENEDOR,
            (index + 1) * ANCHO_CONTENEDOR
          ]

          const scrollY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0]
          })
          return (
            <View style={{ width: ANCHO_CONTENEDOR }}>
              <Animated.View
                style={{
                  marginHorizontal: ESPACIO,
                  padding: ESPACIO,
                  borderRadius: 24,
                  backgroundColor: COLORS.primary,
                  alignItems: 'center',
                  transform: [{ translateY: scrollY }]
                }}
              >
                <Image source={{ uri: `https://drive.google.com/uc?id=${item}` }} style={styles.posterImage} />
              </Animated.View>
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  posterImage: {
    width: '100%',
    height: ANCHO_CONTENEDOR * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10
  }
})
