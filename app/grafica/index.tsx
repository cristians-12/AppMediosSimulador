import { container, texto, title } from "@/constants/Styles";
import React, { useContext } from "react";
import { Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";
import { GraficaContext, GraficaProvider } from "../../context/context";

const index = () => {
  const { valores } = useContext(GraficaContext);

  return (
    <View style={container}>
      <Text style={title}>GRAFICA</Text>
      {valores.longitud.length === 0 ? (
        <Text>No hay valores que graficar</Text>
      ) : (
        <View style={container}>
          <Text style={title}>Perdidas en decibeles</Text>
          {valores.atenuacion.map((e) => (
            <Text style={texto}>{e} dB/m</Text>
          ))}
        </View>

        // <View>
        //   <LineChart
        //   data={{
        //     labels: valores.longitud.map((e) => e.toString()),
        //     datasets: [
        //       {
        //         data: valores.atenuacion.map((e) => e),
        //       },
        //     ],
        //   }}
        //   width={Dimensions.get("window").width}
        //   height={600}
        //   yAxisLabel=""
        //   yAxisSuffix="dB"
        //   xAxisLabel="mts"
        //   yAxisInterval={1} // optional, defaults to 1
        //   chartConfig={{
        //     backgroundColor: "#e26a00",
        //     // backgroundGradientFrom: "purple",
        //     // backgroundGradientTo: "red",
        //     decimalPlaces: 1, // optional, defaults to 2dp
        //     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        //     labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        //     style: {
        //       borderRadius: 1,
        //     },
        //     propsForDots: {
        //       r: "6",
        //       strokeWidth: "2",
        //       stroke: "#ffa726",
        //     },
        //   }}
        //   bezier
        //   style={{
        //     marginVertical: 8,
        //     borderRadius: 0,
        //   }}
        // />
        // </View>
      )}
    </View>
  );
};

export default index;
