import {
  container,
  input,
  inputContainer,
  opcion,
  texto,
  title,
} from "@/constants/Styles";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import BackButton from "./BackButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFetch, useFetchPost } from "@/hooks/useFetch";

interface Datos {
  b: number | null;
  a: number | null;
  u: number;
  l: number;
  f: number;
  o: number;
  e: number | null;
}

const Coaxial = ({ setMostrar }) => {
  const [datos, setDatos] = useState<Datos>({
    a: null,
    b: null,
    u: 0,
    l: 0,
    f: 0,
    o: 0,
    e: 0,
  });

  const enviarInfo = () => {
    console.log(datos);
    if (
      datos.a == null ||
      datos.b == null ||
      datos.u == 0 ||
      datos.l == 0 ||
      datos.f == 0 ||
      datos.o == 0
    ) {
      alert("No se puede, debe llenar todos los campos");
    } else if (datos.a > datos.b) {
      alert("El radio externo no puede ser menor al interno.");
    } else {
      useFetchPost("http://127.0.0.1:8000/coaxial", datos);
    }
  };

  return (
    <View style={container}>
      <Text style={title}>Cable Coaxial</Text>
      <View>
        <Text>Radio interno:</Text>
        <TextInput
          placeholder="Ingrese el radio interno"
          onChangeText={(e: string) => {
            const newValue = e ? parseFloat(e.replace(",", ".")) : null;
            setDatos({ ...datos, a: newValue });
          }}
          style={input}
          keyboardType="number-pad"
        />
      </View>
      <View>
        <Text>Radio externo:</Text>
        <TextInput
          placeholder="Ingrese el radio externo"
          style={input}
          onChangeText={(e: string) => setDatos({ ...datos, b: parseInt(e) })}
          keyboardType="number-pad"
        />
      </View>
      <View>
        <Text>Permeabilidad relativa:</Text>
        <TextInput
          placeholder="Ingrese la permeabilidad μ"
          style={input}
          onChangeText={(e: string) => setDatos({ ...datos, u: parseInt(e) })}
          keyboardType="number-pad"
        />
      </View>
      <View>
        <Text>Longitud:</Text>
        <TextInput
          placeholder="Ingrese la longitud"
          style={input}
          onChangeText={(e: string) => setDatos({ ...datos, l: parseInt(e) })}
          keyboardType="number-pad"
        />
      </View>
      <View>
        <Text>Frecuencia:</Text>
        <TextInput
          placeholder="Ingrese la frecuencia"
          onChangeText={(e: string) => setDatos({ ...datos, f: parseInt(e) })}
          style={input}
          keyboardType="number-pad"
        />
      </View>
      <View>
        <Text>Conductividad del material:</Text>
        <TextInput
          placeholder="Ingrese la conductividad"
          onChangeText={(e: string) => setDatos({ ...datos, o: parseInt(e) })}
          style={input}
          keyboardType="number-pad"
        />
      </View>
      <View>
        <Text>Permitividad relativa:</Text>
        <TextInput
          placeholder="Ingrese la permitividad e"
          onChangeText={(e: string) => {
            const newValue = e ? parseFloat(e.replace(",", ".")) : null;
            setDatos({ ...datos, e: newValue });
          }}
          style={input}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={opcion} onPress={enviarInfo}>
        <Text style={texto}>Calcular</Text>
      </TouchableOpacity>
      <BackButton onPress={() => setMostrar(false)} />
    </View>
  );
};

export default Coaxial;
