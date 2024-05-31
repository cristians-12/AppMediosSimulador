import {
  btnContainer,
  container,
  imagen,
  input,
  inputContainer,
  opcion,
  opcion1,
  textInput,
  texto,
  texto2,
  title,
} from "@/constants/Styles";
import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";  
import BackButton from "./BackButton";
import { useFetch, useFetchPost } from "@/hooks/useFetch";
import { Datos } from "@/constants/datos";
import { GraficaContext, GraficaProvider } from "@/app/context";

const Coaxial = ({ setMostrar, response, setResponse, setResultLay }) => {
  const { setValores, valores } = useContext(GraficaContext);
  const [datos, setDatos] = useState<Datos>({
    a: null,
    b: null,
    u: 1 || null,
    l: 0,
    f: 0,
    o: 0,
    e: 0,
    c: 0,
    longitud: [],
    atenuacion: [],
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
      setResultLay(true);
      const respuesta = await useFetchPost(
        "http://127.0.0.1:8000/coaxial",
        // 'https://backendmedios.onrender.com/coaxial',
        datos
      );
      setResponse(respuesta);
      setValores({ longitud: respuesta.longitud, atenuacion: respuesta.atenuacion });
    }
  };

  useEffect(() => {
    console.log(valores);
  }, [valores]);

  return (
    <GraficaProvider>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={container}>
          <Text style={title}>Cable Coaxial</Text>
          <Image
            source={require("../assets/images/coaxialGra.png")}
            style={imagen}
          />
          <View style={inputContainer}>
            <Text style={texto2}>Radio interno (cm):</Text>
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
            <Text style={texto2}>Radio externo (cm):</Text>
            <TextInput
              placeholder="b"
              style={input}
              onChangeText={(e: string) => {
                const newValue = e ? parseFloat(e.replace(",", ".")) : null;
                setDatos({ ...datos, b: newValue });
              }}
              keyboardType="number-pad"
            />
          </View>
          <View style={inputContainer}>
            <Text style={texto2}>Radio del cable (cm):</Text>
            <TextInput
              placeholder="c"
              style={input}
              onChangeText={(e: string) => {
                const newValue = e ? parseFloat(e.replace(",", ".")) : null;
                setDatos({ ...datos, c: newValue });
              }}
              keyboardType="number-pad"
            />
          </View>
          <View style={{ ...inputContainer, marginVertical: 15 }}>
            <View style={{ width: "45%" }}>
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
            <View style={{ width: "45%" }}>
              <Text style={texto2}>Conductividad del conductor (10^7):</Text>
              <TextInput
                placeholder="σ"
                onChangeText={(e: string) =>
                  setDatos({ ...datos, o: parseInt(e) })
                }
                style={input}
                keyboardType="number-pad"
              />
            </View>
          </View>
          <View style={inputContainer}>
            <Text style={texto2}>Longitud (m): </Text>
            <TextInput
              placeholder="Ingrese la longitud"
              style={input}
              onChangeText={(e: string) =>
                setDatos({ ...datos, l: parseInt(e) })
              }
              keyboardType="number-pad"
            />
          </View>
          <View style={inputContainer}>
            <Text style={texto2}>Frecuencia (Hz): </Text>
            <TextInput
              placeholder="Ingrese la frecuencia"
              onChangeText={(e: string) =>
                setDatos({ ...datos, f: parseInt(e) })
              }
              style={input}
              keyboardType="number-pad"
            />
          </View>

          <View style={inputContainer}>
            <Text style={texto2}>Permitividad relativa (ε) :</Text>
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
          <View style={btnContainer}>
            <TouchableOpacity style={opcion1} onPress={enviarInfo}>
              <Text style={texto}>Calcular</Text>
            </TouchableOpacity>
            <BackButton onPress={() => setMostrar(false)} />
          </View>
        </View>
      </ScrollView>
    </GraficaProvider>
  );
};

export default Coaxial;
