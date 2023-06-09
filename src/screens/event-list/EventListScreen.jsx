import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import { styles } from './EventListScreen.styles'
import { SearchBar } from '../../components/search/SearchBar'
import { getEvents } from '../../api/service'
import { Loading } from '../../components/loading'

export const EventListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [eventList, setEventList] = useState([])
  const [loadingState, setLoadingState] = useState(true)

  const handleSearch = (query) => {
    setSearchQuery(query)
  }
  const filteredEvents = eventList.filter(event => (
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  useEffect(() => {
    getEvents().then(datas => {
      setEventList(datas)
      setLoadingState(false)
    }).catch(err => console.log(err))
  }, [])

  const festival = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('EventDetail', { item })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: `https://drive.google.com/uc?id=${item.images[0]}` }} style={styles.itemImage} />
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
    </Pressable>
  )

  return (
    <SafeAreaView style={styles.container}>
      {loadingState
        ? <Loading />
        : <>
          <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
          <FlatList
            data={filteredEvents}
            renderItem={festival}
            keyExtractor={item => item.id}
            style={styles.itemList}
          />
        </>}
    </SafeAreaView>
  )
}
