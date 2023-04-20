import { StatusBar } from 'expo-status-bar'
import { MainStackScreen } from './src/screens/event-list/MainStackScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UserProvider } from './src/contexts/UserContext'

const LocationListStack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
              <LocationListStack.Navigator screenOptions={{ headerShown: false }}>
                <LocationListStack.Screen name='Main' component={MainStackScreen} />
              </LocationListStack.Navigator>
        </NavigationContainer>
      </UserProvider>
      <StatusBar style='auto' />
    </>
  )
}
