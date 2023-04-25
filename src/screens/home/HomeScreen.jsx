import React, { useContext } from 'react'
import { SafeAreaView, ScrollView, Text, Pressable, View } from 'react-native'
import { styles } from './HomeScreen.styles'
import { CarouselImage } from '../../components/carousel-image/CarouselImage'
import { UserContext } from '../../contexts/UserContext'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'

export const HomeScreen = ({ navigation }) => {
  const { currentUser } = useContext(UserContext)
  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Jujuy%2C_energ%C3%ADa_viva.jpg/1024px-Jujuy%2C_energ%C3%ADa_viva.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/CalleSanMart%C3%ADn-Jujuy-01003.jpg/1024px-CalleSanMart%C3%ADn-Jujuy-01003.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6b/JUJUY_-_EMMANUEL_AMERISE_FOTOGRAFIA.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Catedral_de_Jujuy.JPG/800px-Catedral_de_Jujuy.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Casa_de_Gobierno_de_Jujuy_01.JPG/800px-Casa_de_Gobierno_de_Jujuy_01.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Coat_of_arms_of_San_Salvador_de_Jujuy.svg/800px-Coat_of_arms_of_San_Salvador_de_Jujuy.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1024px-Flag_of_Argentina.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bandera_de_la_Provincia_de_Jujuy.svg/800px-Bandera_de_la_Provincia_de_Jujuy.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/ParqueXibiXibi.jpg/1280px-ParqueXibiXibi.jpg'
  ]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.itemList}>
        <View style={[styles.carouselContainer]}>
          <CarouselImage images={images} />
        </View>
        {currentUser && (
          <View style={[styles.titleContainer, styles.card]}>
            <Text style={styles.user_title}>
              Bienvenido! {currentUser.name}
            </Text>
          </View>
        )}
        <View style={[styles.descContainer, styles.card]}>
          <Text style={[styles.sub_title, styles.sub_card]}>
            <MaterialCommunityIcons name='party-popper' size={24} color='purple' /> Fiestas y Tradiciones Regionales
          </Text>
          <Text style={[styles.sub_title, styles.sub_card]}>
            <Entypo name='location' size={20} color='purple' /> JUJUY
          </Text>
          {currentUser && (
            <>
              {currentUser.events.length !== 0
                ? <View style={[styles.sub_title, styles.sub_card]}>
                  <Text style={[styles.sub_title]}>
                    <MaterialCommunityIcons name='note-text' size={24} color='purple' /> Recordatorio
                  </Text>
                  {currentUser.events.map((item, idx) => (
                    <View key={idx} style={[styles.sub_title, styles.event_card]}>
                      <Pressable onPress={() => navigation.navigate('EventDetail', { item })}>
                        <View style={styles.itemContainer}>
                          <Text style={styles.itemTitle}>{item.title}</Text><MaterialCommunityIcons name='share-outline' size={24} color='black' />
                        </View>
                      </Pressable>
                    </View>
                  ))}
                </View>
                : <Text style={[styles.sub_title, styles.sub_card]}>
                  No tiene Eventos Guardados
                  </Text>}
            </>
          )}
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}
