import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EventDetailScreen } from './src/screens/event-detail/EventDetailScreen'
import { COLORS } from './src/utils/theme'
import { UserProvider } from './src/contexts/UserContext'
import { MainStackScreen } from './src/screens/event-list/MainStackScreen'
import { SignUpScreen } from './src/screens/sign-up/SignUpScreen'
import { EventDetailWebScreen } from './src/screens/event-detail/EventDetailWebScreen'

const EventListStack = createNativeStackNavigator()

export default function App () {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <EventListStack.Navigator screenOptions={{ headerShown: false }}>
            <EventListStack.Screen name='Main' component={MainStackScreen} />
            <EventListStack.Screen name='EventDetail' component={EventDetailScreen} />
            <EventListStack.Screen name='EventDetailWeb' component={EventDetailWebScreen} />
            <EventListStack.Screen name='SignUp' component={SignUpScreen} />
          </EventListStack.Navigator>
        </NavigationContainer>
      </UserProvider>
      <StatusBar backgroundColor={COLORS.inactive} />
    </>
  )
}
