
import { container, texto, title } from '@/constants/Styles'
import React from 'react'
import { Text, View } from 'react-native'

const index = () => {
  return (
    <View style={container}>
        <Text style={title} >
            Manual de usuario:
        </Text>
        <Text style={texto}>1. Ingrese el valor de los parametros</Text>
    </View>
  )
}

export default index