import * as React from 'react'
import { StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native'

const DEVICE_WIDTH = Dimensions.get('window').width

class CarouselImage extends React.Component {
  scrollRef = React.createRef()
  constructor (props) {
    super(props)

    this.state = {
      selectedIndex: 0
    }
    this.scrollRef = React.createRef()
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        prev => ({
          selectedIndex:
            prev.selectedIndex === this.props.images.length - 1
              ? 0
              : prev.selectedIndex + 1
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            x: DEVICE_WIDTH * this.state.selectedIndex,
            y: 0
          })
        }
      )
    }, 3500)
  }

  setSelectedIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset
    const viewSize = event.nativeEvent.layoutMeasurement

    const selectedIndex = Math.floor(contentOffset.x / viewSize.width)
    this.setState({ selectedIndex })
  }

  render () {
    const { images } = this.props
    return (
      <View style={{ height: '100%', width: '100%' }}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}
        >
          {images.map(image => (
            <Image
              style={styles.backgroundImage}
              source={{ uri: image }}
              key={image}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: Dimensions.get('window').width
  }
})

export { CarouselImage }
