import Coaxial from "@/components/Coaxial";
import Opciones from "@/components/Opciones";
import Placas from "@/components/Placas";
import { container, container1, input, opcion, texto } from "@/constants/Styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {

  const [mostrar, setMostrar] = useState(false);
  const [placaShow, setShowPlaca] = useState(false);

  return (
    <View style={container1}>
      {mostrar || placaShow ? <Text style={texto}></Text> : <Opciones setMostrar={setMostrar} setShowPlaca={setShowPlaca} />}
      {mostrar && <Coaxial setMostrar={setMostrar}  />}
      {placaShow && <Placas setShowPlaca={setShowPlaca} />}
    </View>
  );
}
