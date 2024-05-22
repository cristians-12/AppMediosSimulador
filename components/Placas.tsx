import { container, imagen, input } from '@/constants/Styles'
import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import BackButton from './BackButton'

const Placas = ({ setShowPlaca }) => {
  return (
    <View style={container}>
      {/* <Text>Coaxial</Text> */}
      {/* <Image source={{ uri: 'url' }} style={imagen} /> */}
      <TextInput placeholder='Ingrese la longitud de las placas' style={input} keyboardType="number-pad" />
      <BackButton onPress={()=>setShowPlaca(false)} />
    </View>
  )
}

export default Placas