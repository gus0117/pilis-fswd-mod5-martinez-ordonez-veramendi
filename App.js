import { StatusBar } from 'expo-status-bar'
import { MainStackScreen } from './src/screens/event-list/MainStackScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const LocationListStack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
            <LocationListStack.Navigator screenOptions={{ headerShown: false }}>
              <LocationListStack.Screen name='Main' component={MainStackScreen} />
            </LocationListStack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  )
}
