import Coaxial from "@/components/Coaxial";
import Opciones from "@/components/Opciones";
import Placas from "@/components/Placas";
import ResultadosCoaxial from "@/components/ResultadosCoaxial";
import ResultadosPlacas from "@/components/ResultadosPlacas";
import { Response } from "@/constants/datos";
import {
  container,
  container1,
  input,
  opcion,
  texto,
} from "@/constants/Styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [mostrar, setMostrar] = useState(false);
  const [placaShow, setShowPlaca] = useState(false);
  const [resultLay, setResultLay] = useState(false);
  const [resultPlaca, setResultPlaca] = useState(false);

  const [response, setResponse] = useState<Response>({
    msg: "",
    L: 0,
    C: 0,
    R: 0,
    G: 0,
    
  });

  return (
    <View style={container1}>
      {mostrar || placaShow || resultLay || resultPlaca ? (
        <Text style={texto}></Text>
      ) : (
        <Opciones setMostrar={setMostrar} setShowPlaca={setShowPlaca} />
      )}
      {mostrar && (
        <Coaxial
          setMostrar={setMostrar}
          setResultLay={setResultLay}
          response={response}
          setResponse={setResponse}
        />
      )}
      {placaShow && (
        <Placas setResponse={setResponse} setResultPlaca={setResultPlaca} setShowPlaca={setShowPlaca} />
      )}
      {resultLay && (
        <ResultadosCoaxial
          response={response}
          setResultLay={setResultLay}
          setMostrar={setMostrar}
        />
      )}
      {resultPlaca && (
        <ResultadosPlacas setShowPlaca={setShowPlaca} response={response} setResultPlaca={setResultPlaca} />
      )}
    </View>
  );
}
