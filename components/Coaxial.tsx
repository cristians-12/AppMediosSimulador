import { container, input, inputContainer, title } from '@/constants/Styles'
import React from 'react'
import { Text, TextInput, View } from 'react-native'
import BackButton from './BackButton'


const Coaxial = ({ setMostrar }) => {

    return (
        <View style={container}>
            <Text style={title} >Cable Coaxial</Text>
            <View>
                <Text>Radio externo:</Text>
                <TextInput placeholder='Ingrese el radio externo' style={input} keyboardType="number-pad" />
            </View>
            <View>
                <Text>Radio interno:</Text>
                <TextInput placeholder='Ingrese el radio interno' style={input} keyboardType="number-pad" />
            </View>
            <View>
                <Text>Permeabilidad relativa:</Text>
                <TextInput placeholder='Ingrese la permeabilidad del medio' style={input} keyboardType="number-pad" />
            </View>
            <View>
                <Text>Longitud:</Text>
                <TextInput placeholder='Ingrese la longitud' style={input} keyboardType="number-pad" />
            </View>
            <View>
                <Text>Frecuencia:</Text>
                <TextInput placeholder='Ingrese la frecuencia' style={input} keyboardType="number-pad" />
            </View>
            <View>
                <Text>Conductividad del material:</Text>
                <TextInput placeholder='Ingrese la frecuencia' style={input} keyboardType="number-pad" />
            </View>

            <BackButton onPress={() => setMostrar(false)} />
        </View>
    )
}

export default Coaxial