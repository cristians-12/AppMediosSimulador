import {
  container,
  input,
  inputContainer,
  opcion,
  texto,
  title,
} from "@/constants/Styles";
import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, View, TouchableOpacity } from "react-native";
import BackButton from "./BackButton";
import { useFetch, useFetchPost } from "@/hooks/useFetch";
import { Datos } from "@/constants/datos";

const Coaxial = ({ setMostrar, response, setResponse, setResultLay }) => {
  const [datos, setDatos] = useState<Datos>({
    a: null,
    b: null,
    u: 1 || null,
    l: 0,
    f: 0,
    o: 0,
    e: 0,
  });

  const enviarInfo = async () => {
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
      const respuesta = await useFetchPost(
        "https://backendmedios.onrender.com/coaxial",
        datos
      );
      setResponse(respuesta);
    }
  };

  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <View style={container}>
      <Text style={title}>Cable Coaxial</Text>
      <View>
        <Text>Radio interno (cm):</Text>
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
        <Text>Radio externo (cm):</Text>
        <TextInput
          placeholder="Ingrese el radio externo"
          style={input}
          onChangeText={(e: string) => setDatos({ ...datos, b: parseInt(e) })}
          keyboardType="number-pad"
        />
      </View>
      <View>
        <Text>Permeabilidad relativa (μ):</Text>
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
      <View>
        <Text>Longitud (m): </Text>
        <TextInput
          placeholder="Ingrese la longitud"
          style={input}
          onChangeText={(e: string) => setDatos({ ...datos, l: parseInt(e) })}
          keyboardType="number-pad"
        />
      </View>
      <View>
        <Text>Frecuencia (Hz): </Text>
        <TextInput
          placeholder="Ingrese la frecuencia"
          onChangeText={(e: string) => setDatos({ ...datos, f: parseInt(e) })}
          style={input}
          keyboardType="number-pad"
        />
      </View>
      <View>
        <Text>Conductividad del conductor (σ):</Text>
        <TextInput
          placeholder="Ingrese la conductividad"
          onChangeText={(e: string) => setDatos({ ...datos, o: parseInt(e) })}
          style={input}
          keyboardType="number-pad"
        />
      </View>
      <View>
        <Text>Permitividad relativa (ε) :</Text>
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
      <TouchableOpacity
        style={opcion}
        onPress={() => {
          enviarInfo();
          setResultLay(true);
        }}
      >
        <Text style={texto}>Calcular</Text>
      </TouchableOpacity>
      <BackButton onPress={() => setMostrar(false)} />
    </View>
  );
};

export default Coaxial;
