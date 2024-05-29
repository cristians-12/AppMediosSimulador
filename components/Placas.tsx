import {
  btnContainer,
  container,
  imagen,
  imagen1,
  input,
  inputContainer,
  opcion,
  texto,
  texto2,
  title,
} from "@/constants/Styles";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import BackButton from "./BackButton";
import { Datos, DatosP } from "@/constants/datos";
import { useFetchPost } from "@/hooks/useFetch";

const Placas = ({ setShowPlaca }) => {
  const [datos, setDatos] = useState<DatosP>({
    a: null,
    b: null,
    u: 1 || null,
    f: 0,
    o: 0,
    e: 0,
  });
  const enviarInfo = async () => {
    if (
      datos.a == null ||
      datos.b == null ||
      datos.u == 0 ||
      datos.f == 0 ||
      datos.o == 0
    ) {
      alert("No se puede, debe llenar todos los campos");
    } else if (datos.a > datos.b) {
      alert("El radio externo no puede ser menor al interno.");
    } else {
      const respuesta = await useFetchPost(
        "https://backendmedios.onrender.com/placas",
        datos
      );
    }
  };
  return (
    <View style={container}>
      <Text style={title}>Placas paralelas</Text>
      <Image source={require("../assets/images/placas.png")} style={imagen1} />

      <View style={inputContainer}>
        <Text style={texto2}>Largo de placas (cm):</Text>
        <TextInput
          placeholder="b"
          onChangeText={(e: string) => {
            const newValue = e ? parseFloat(e.replace(",", ".")) : null;
            setDatos({ ...datos, a: newValue });
          }}
          style={input}
          keyboardType="number-pad"
        />
      </View>
      <View style={inputContainer}>
        <Text style={texto2}>Espacio entre placas (cm):</Text>
        <TextInput
          placeholder="a"
          onChangeText={(e: string) => {
            const newValue = e ? parseFloat(e.replace(",", ".")) : null;
            setDatos({ ...datos, a: newValue });
          }}
          style={input}
          keyboardType="number-pad"
        />
      </View>
      <View style={inputContainer}>
        <Text style={texto2}>Frecuencia (Hz):</Text>
        <TextInput
          placeholder="Frecuencia"
          onChangeText={(e: string) => {
            const newValue = e ? parseFloat(e.replace(",", ".")) : null;
            setDatos({ ...datos, a: newValue });
          }}
          style={input}
          keyboardType="number-pad"
        />
      </View>
      <View style={inputContainer}>
        <Text style={texto2}>Conductividad del conductor:</Text>
        <TextInput
          placeholder="σ 10^7"
          onChangeText={(e: string) => setDatos({ ...datos, o: parseInt(e) })}
          style={input}
          keyboardType="number-pad"
        />
      </View>
      <View style={inputContainer}>
        <Text style={texto2}>Permitividad relativa (ε) :</Text>
        <TextInput
          placeholder="ε"
          onChangeText={(e: string) => {
            const newValue = e ? parseFloat(e.replace(",", ".")) : null;
            setDatos({ ...datos, e: newValue });
          }}
          style={input}
          keyboardType="numeric"
        />
      </View>
      <View style={inputContainer}>
        <Text style={texto2}>Permeabilidad relativa (μ):</Text>
        <TextInput
          placeholder="Ingrese la permeabilidad μ"
          style={input}
          value={datos.u !== null ? datos.u.toString() : ""}
          onChangeText={(e) => {
            const newValue = e ? parseInt(e) : null;
            setDatos({ ...datos, u: newValue });
          }}
          keyboardType="number-pad"
        />
      </View>

      <View style={btnContainer}>
        <TouchableOpacity style={opcion}>
          <Text style={texto}>Calcular</Text>
        </TouchableOpacity>
        <BackButton onPress={() => setShowPlaca(false)} />
      </View>
    </View>
  );
};

export default Placas;
