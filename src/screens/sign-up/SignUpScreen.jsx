import React, { useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { styles } from './SignUpScreen.styles'
import { UserContext } from '../../contexts/UserContext'
import { getUser, storeUser } from '../../api/user.service'

const STORAGE = '@AppEvent'

export const SignUpScreen = () => {
  const navigation = useNavigation()
  const { setCurrentUser } = useContext(UserContext)
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })
  const handleSignUp = ({ username, password }) => {
    getUser(STORAGE).then(db => {
      if (db == null) {
        // console.log('not db')
        const user = {
          users: [{
            id: '@Key-' + username,
            name: username,
            password,
            events: []
          }]
        }
        storeUser(user)
        const id = user.users[0].id
        const name = user.users[0].name
        const events = user.users[0].events
        setCurrentUser({ id, name, events })
        navigation.navigate('Home')
      } else {
        // console.log('db')
        const user = {
          id: '@Key-' + username,
          name: username,
          password,
          events: []
        }
        const newuser = [...db.users, user]
        db.users = newuser
        storeUser(db)
        const id = user.id
        const name = user.name
        const events = user.events
        setCurrentUser({ id, name, events })
        navigation.navigate('Home')
      }
    }).catch(err => console.warn(err))
  }

  const handleLogin = () => {
    navigation.navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear una Cuenta</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Nombre de usuario'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='username'
        rules={{ required: 'El nombre de usuario es requerido' }}
      />
      {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Contraseña'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name='password'
        rules={{ required: 'La constraseña es requerida' }}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignUp)}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  )
}
