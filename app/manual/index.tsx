
import { container, container1, texto, title } from '@/constants/Styles'
import React from 'react'
import { Text, View } from 'react-native'

const index = () => {
  return (
    <View style={container1}>
        <Text style={title} >
            Manual de usuario:
        </Text>
        <Text style={texto}>1. Ingrese el tipo de linea de transmision con el que se va a trabajar.</Text>
        <Text style={texto}>2. Ingrese el valor de los parametros</Text>
    </View>
  )
}

export default index