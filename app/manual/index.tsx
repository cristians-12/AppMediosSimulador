
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
      <Text style={texto}>2. Ingrese el valor de los parametros.</Text>
      <Text style={texto}>3. Verifique que no haya errores.</Text>
      <Text style={texto}>4. Presione el boton de calcular.</Text>
      <Text style={texto}>5. Una vez hecho esto puede apreciar la grafica de perdidas.</Text>
      <Text style={texto}>IMPORTANTE: Valores bajos debe escribir 0.0000007 por ejemplo</Text>
    </View>
  )
}

export default index