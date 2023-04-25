import React, { useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './LoginScreen.styles'
import { UserContext } from '../../contexts/UserContext'
import { useForm, Controller } from 'react-hook-form'
import { useNavigation, Link } from '@react-navigation/native'
import { getUser } from '../../api/user.service'
import Toast from 'react-native-toast-message'

export const LoginScreen = () => {
  const navigation = useNavigation()
  const { setCurrentUser } = useContext(UserContext)
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const handleLogin = ({ username, password }) => {
    getUser().then(db => {
      if (db != null) {
        // console.log(db)
        const res = db.users.filter(u => u.name === username && u.password === password)
        if (res.length !== 0) {
          const id = res[0].id
          const name = res[0].name
          const events = res[0].events
          setCurrentUser({ id, name, events })
          navigation.navigate('Home')
          // console.log(res[0].name)
        } else {
          console.log('not exist user')
          showToastError()
        }
        // console.log(res)
      } else {
        console.log('not exist db')
        showToastError()
      }
    }).catch(err => console.warn(err))
  }
  const showToastError = () => {
    Toast.show({
      type: 'error',
      text1: 'Autenticacion Fallida',
      text2: 'Verifique su Usuario o Contraseña',
      position: 'bottom'
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLogin)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Link style={styles.signUpButton} to={{ screen: 'SignUp' }}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Link>
      <Toast />
    </View>
  )
}
