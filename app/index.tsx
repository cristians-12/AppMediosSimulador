import Coaxial from "@/components/Coaxial";
import Placas from "@/components/Placas";
import { container, input, opcion, texto } from "@/constants/Styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {

  const [mostrar, setMostrar] = useState(false);
  const [placaShow, setShowPlaca] = useState(false);

  return (
    <View style={container}>
      <Text style={texto}>Seleccione el tipo de linea de transmision: </Text>
      <TouchableOpacity style={opcion} onPress={() => { setMostrar(true); setShowPlaca(false) }}>
        <Text style={texto}>Cable coaxial</Text>
      </TouchableOpacity>
      <TouchableOpacity style={opcion} onPress={() => {
        setShowPlaca(true);
        setMostrar(false);
      }}>
        <Text style={texto}>Placas paralelas</Text>
      </TouchableOpacity>
      {mostrar && <Coaxial />}
      {placaShow && <Placas />}
    </View>
  );
}
