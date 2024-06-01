import { container, container1, imagen, imagen1, texto, title } from "@/constants/Styles";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import BackButton from "./BackButton";

const ResultadosCoaxial = ({ setMostrar, response, setResultLay }) => {
  useEffect(() => {
    setMostrar(false);
    // console.log(response);
  }, [response]);

  return (
    <View style={container}>
      <Text style={title}>Parametros obtenidos:</Text>
      <View>
        {response.L === 0 ? (
          <Text style={texto}>Cargando..</Text>
        ) : (
          <View>
            <Text style={texto}>{response.msg}</Text>
            <Text style={texto}>Inductancia: {response.L} H/m</Text>
            <Text style={texto}>Capacitancia: {response.C} C/m</Text>
            <Text style={texto}>Resistividad: {response.R} Ω/m</Text>
            <Text style={texto}>Conductancia: {response.G} ℧/m</Text>
          </View>
        )}
        <BackButton
          onPress={() => {
            setResultLay(false);
            setMostrar(true);
          }}
        />
      </View>
      <Image source={require('../assets/images/coaxi-transparencia.png')} resizeMode="contain" style={{...imagen, marginTop:20}} />
    </View>
  );
};

export default ResultadosCoaxial;
