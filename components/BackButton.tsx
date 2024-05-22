import { opcion, texto } from '@/constants/Styles'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

type BackButtonProps = {
    setMostrar: (value: boolean) => void;
}

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity style={opcion} onPress={onPress}>
        <Text style={texto}>Regresar</Text>
    </TouchableOpacity>
  )
}

export default BackButton