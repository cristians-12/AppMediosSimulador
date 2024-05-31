import { texto } from "@/constants/Styles";
import React from "react";
import { Text, View } from "react-native";
import BackButton from "./BackButton";

const ResultadosPlacas = ({ response, setResultPlaca, setShowPlaca }) => {
  return (
    <View>
      {response ? (
        <View>
          <Text style={texto}>Inductancia: {response.L} H/m</Text>
          <Text style={texto}>Capacitancia: {response.C} C/m</Text>
          <Text style={texto}>Resistividad: {response.R} Ω/m</Text>
          <Text style={texto}>Conductancia: {response.G} ℧/m</Text>
        </View>
      ) : (
        <Text>Cargando..</Text>
      )}
      <BackButton onPress={()=>{
        setResultPlaca(false)
        setShowPlaca(true)
      }} />
    </View>
  );
};

export default ResultadosPlacas;
