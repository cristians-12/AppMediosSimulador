import { input } from '@/constants/Styles'
import React from 'react'
import { Text, TextInput, View } from 'react-native'

const Coaxial = () => {
    return (
        <View>
            {/* <Text>Coaxial</Text> */}
            <TextInput placeholder='Ingrese la permeabilidad del medio' style={input} keyboardType="number-pad" />
        </View>
    )
}

export default Coaxial