import React from 'react'
import { EventListScreen } from './EventListScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { HomeScreen } from '../home/HomeScreen'
import { LoginScreen } from '../login/LoginScreen'
import { COLORS, SPACING } from '../../utils/theme'
import { StyleSheet } from 'react-native'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Home: 'home',
  Profile: 'person',
  Explorar: 'search'
}

const screenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name]// TAB_ICON[Home]
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
      tabBarActiveTintColor:'#ed589b',
      tabBarInactiveTintColor: '#fca7cd',
      headerShown: false,
      borderTopColor: '#fce3ef',
      tabBarStyle: styles.tabBar
  
    }
  }

export const MainStackScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name='Home' options={{ title: 'Inicio' }} component={ HomeScreen } />
        <Tab.Screen name='Explorar' options={{ title: 'Explorar' }}  component={ EventListScreen } />
        <Tab.Screen name='Profile' options={{ title: 'Perfil' }} component={ LoginScreen } />
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
  