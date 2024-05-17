import { input } from '@/constants/Styles'
import React from 'react'
import { Text, TextInput, View } from 'react-native'

const Placas = () => {
  return (
    <View>
    {/* <Text>Coaxial</Text> */}
    <TextInput placeholder='Ingrese la longitud de las placas' style={input} keyboardType="number-pad" />
</View>
  )
}

export default Placas