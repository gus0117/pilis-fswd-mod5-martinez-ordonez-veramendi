import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from './src/screens/home/HomeScreen'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SPACING } from './src/utils/theme'
import { EventListScreen } from './src/screens/event-list/EventListScreen'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Home: 'home',
  Explorar: 'search'
}

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]// TAB_ICON[Home]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar

  }
}

export default function App () {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Explorar' component={ EventListScreen } />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs
  }
})
