import { Stack, Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { barra } from "@/constants/Styles";
import { BlurView } from "expo-blur";
import { GraficaProvider } from "./context";

export default function RootLayout() {
  useFonts({
    Poppins: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  return (
    <GraficaProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#c38cd9",
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            bottom: 0,
          },
          tabBarBackground: () => (
            <BlurView
              intensity={80}
              style={{
                overflow: "hidden",
                backgroundColor: "tranparent",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="grafica/index"
          options={{
            title: "Grafica",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="level-up" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="manual/index"
          options={{
            title: "Manual",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="book" color={color} />
            ),
          }}
        />
      </Tabs>
    </GraficaProvider>
  );
}
