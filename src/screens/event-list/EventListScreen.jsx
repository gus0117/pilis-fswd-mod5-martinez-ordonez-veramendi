import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import { styles } from './EventListScreen.styles'
import { getEvents } from '../../api/service'

export const EventListScreen = ({navigation}) => {

  const [event, setEvent] = useState([])
  
  useEffect(() => {
    getEvents().then(datas => {
      setEvent(datas)
    }).catch(err => console.log(err))
  }, [])
  

  const festival = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('EventDetail', {item})}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: `https://drive.google.com/uc?id=${item.images[0]}` }} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.date}</Text>
      </View>
    </Pressable>
  )
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={event}
        renderItem={festival}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  )
}


