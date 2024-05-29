import { back, opcion, texto } from '@/constants/Styles'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

// type BackButtonProps = {
//     setMostrar: (value: boolean) => void;
// }

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity style={back} onPress={onPress}>
        <Text style={texto}>{'<'}</Text>
    </TouchableOpacity>
  )
}

export default BackButton