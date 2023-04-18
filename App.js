import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackScreen } from './src/screens/event-list/EventStackScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EventDetailScreen } from './src/screens/event-detail/EventDetailScreen'

const EventListStack = createNativeStackNavigator()



export default function App () {
  return (
    <>
      <NavigationContainer>
        <EventListStack.Navigator screenOptions={{ headerShown: false }}>
          <EventListStack.Screen name='Principal' component={ MainStackScreen } />
          <EventListStack.Screen name='Detalle' component={ EventDetailScreen } />
        </EventListStack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  )
}

