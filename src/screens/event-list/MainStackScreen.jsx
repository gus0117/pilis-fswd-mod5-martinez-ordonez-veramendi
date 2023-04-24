import React from 'react'
import { EventListScreen } from './EventListScreen'
import { HomeScreen } from '../home/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SPACING } from '../../utils/theme'
import { ProfileScreen } from '../profile/ProfileScreen'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Home: 'home',
  Profile: 'person',
  Search: 'search'
}

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.secondaty,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar
  }
}

export const MainStackScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name='Home' options={{ title: 'Inicio' }} component={HomeScreen} />
      <Tab.Screen name='Search' options={{ title: 'Explorar' }} component={EventListScreen} />
      <Tab.Screen name='Profile' options={{ title: 'Perfil' }} component={ProfileScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    backgroundColor: COLORS.primary,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs
  }
})
