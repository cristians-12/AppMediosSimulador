import { imagen, opcion, texto } from '@/constants/Styles';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const Opciones = ({ setMostrar, setShowPlaca }) => {
    return (
        <View>
            <Text style={texto}>Seleccione el tipo de linea de transmision: </Text>
            <TouchableOpacity style={opcion} onPress={() => { setMostrar(true); setShowPlaca(false) }}>
                <Image style={imagen} source={require('../assets/images/coaxial.png')} />
                <Text style={texto}>Cable coaxial</Text>
            </TouchableOpacity>
            <TouchableOpacity style={opcion} onPress={() => {
                setShowPlaca(true);
                setMostrar(false);
            }}>
                <Image style={imagen} source={require('../assets/images/connection.png')} />
                <Text style={texto}>Placas paralelas</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Opciones