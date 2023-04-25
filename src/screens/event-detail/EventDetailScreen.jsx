import React, { useState, useEffect, useContext } from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { styles } from './EventDetailScreen.styles'
import { Ionicons } from '@expo/vector-icons'
// import { COLORS } from '../../utils/theme'
import { Carrusel } from './Carrusel'
import { storeUser, getUser } from '../../api/user.service'
import Toast from 'react-native-toast-message'
import { Link } from '@react-navigation/native'
import { UserContext } from '../../contexts/UserContext'

export const EventDetailScreen = ({ route }) => {
  const { item } = route.params
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const [ban, setBan] = useState(false)
  useEffect(() => {
    if (currentUser != null) {
      getUser().then(db => {
        if (db != null) {
          // console.log(db)
          const res = db.users.filter(u => u.id === currentUser.id)
          if (res.length !== 0) {
            const resevent = res[0].events.filter(e => e.id === item.id)
            if (resevent.length !== 0) {
              setBan(true)
            } else {
              setBan(false)
            }
          } else {
            console.log('not exist user')
            // showToastError()
          }
          // console.log(res)
        } else {
          console.log('not exist db')
        }
      }).catch(err => console.warn(err))
    }
  }, [])
  const handleSave = () => {
    getUser().then(db => {
      if (db != null) {
        const res = db.users.filter(u => u.id === currentUser.id)
        const other = db.users.filter(u => u.id !== currentUser.id)
        if (res.length !== 0) {
          const id = res[0].id
          const name = res[0].name
          const events = [...res[0].events, item]

          res[0].events = events
          const newusers = [...other, res[0]]
          db.users = newusers
          setCurrentUser({ id, name, events })
          storeUser(db).then().catch(err => console.warn(err))

          setBan(true)
          showToastSuccess()
        } else {
          console.log('not exist user')
        }
      } else {
        console.log('not exist db')
      }
    }).catch(err => console.warn(err))
  }
  const handleDelete = () => {
    getUser().then(db => {
      if (db != null) {
        // console.log(db)
        const res = db.users.filter(u => u.id === currentUser.id)
        const other = db.users.filter(u => u.id !== currentUser.id)
        if (res.length !== 0) {
          const id = res[0].id
          const name = res[0].name
          const otherevent = res[0].events.filter(e => e.id !== item.id)
          const events = otherevent

          res[0].events = events
          const newusers = [...other, res[0]]
          db.users = newusers
          setCurrentUser({ id, name, events })
          storeUser(db).then().catch(err => console.warn(err))

          setBan(false)
          showToastInfo()
        } else {
          console.log('not exist user')
        }
      } else {
        console.log('not exist db')
      }
    }).catch(err => console.warn(err))
  }
  const showToastSuccess = () => {
    Toast.show({
      type: 'success',
      text1: 'Guardado',
      position: 'bottom',
      visibilityTime: 1500
    })
  }
  const showToastInfo = () => {
    Toast.show({
      type: 'info',
      text1: 'Se Quito de Recordatorio',
      position: 'bottom',
      visibilityTime: 1500
    })
  }
  return (
    <>
      <ScrollView style={styles.container}>
        <Carrusel images={item.images} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.location}>{item.location}</Text>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.date}>{item.time}</Text>
          {currentUser && (
            <View style={styles.buttonContainer}>
              <Link style={styles.webButton} to={{ screen: 'EventDetailWeb', params: { url: item.url } }}>
                Ir a la web
              </Link>
              {ban
                ? <TouchableOpacity style={styles.bookButton} onPress={handleDelete}>
                  <Ionicons name='bookmark' size={24} color='white' />
                  </TouchableOpacity>
                : <TouchableOpacity style={styles.bookButton} onPress={handleSave}>
                  <Ionicons name='bookmark-outline' size={24} color='white' />
                  </TouchableOpacity>}
            </View>
          )}

          <Text style={styles.description}>{item.description}</Text>
        </View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: item.locationCoordinates.latitude,
            longitude: item.locationCoordinates.longitude,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002
          }}
        >
          <Marker
            coordinate={{
              latitude: item.locationCoordinates.latitude,
              longitude: item.locationCoordinates.longitude
            }}
            title={item.title}
          />
        </MapView>
      </ScrollView>
      <Toast />
    </>
  )
}
