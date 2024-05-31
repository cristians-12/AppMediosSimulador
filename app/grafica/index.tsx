import { container, texto, title } from "@/constants/Styles";
import React, { useContext } from "react";
import { Text, View } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { GraficaContext, GraficaProvider } from "../context";

const index = () => {
  const { valores } = useContext(GraficaContext);

  // const screenWidth = Dimensions.get("window").width;
  return (
    <View style={container}>
      {/* {valores.atenuacion.map(
        (e)=> <Text>{parseFloat(e)}</Text>
      )} */}
      <Text style={title}>GRAFICA</Text>

      {valores.longitud.length === 0 ? (
        <Text>No hay valores que graficar</Text>
      ) : (
        <View>
          <LineChart
            data={{
              labels: valores.longitud.map(e=> e.toString()),
              datasets: [
                {
                  data: valores.atenuacion.map(e => parseFloat(e)),
                },
              ],
            }}
            width={Dimensions.get("window").width} // from react-native
            height={600}
            yAxisLabel=""
            yAxisSuffix="dB"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "purple",
              backgroundGradientTo: "red",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 1,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 0,
            }}
          />
        </View>
      )}
    </View>
  );
};

export default index;
