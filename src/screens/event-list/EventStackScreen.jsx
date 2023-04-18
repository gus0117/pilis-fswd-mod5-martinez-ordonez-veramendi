import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EventListScreen } from './EventListScreen'
import { EventDetailScreen } from '../event-detail/EventDetailScreen'

const EventListStack = createNativeStackNavigator()
export const EventStackScreen = () => {
  return (
    <EventListStack.Navigator screenOptions={{headerShow: false}}>
        <EventListStack.Screen name='ExplorarLista' component={EventListScreen} />
        <EventListStack.Screen name='Detalle' component={EventDetailScreen}/>
    </EventListStack.Navigator>

  )
}
