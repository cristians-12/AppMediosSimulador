import { Stack, Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from "expo-font";

export default function RootLayout() {

  useFonts({
    Poppins: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf')
  })

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'red', headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="grafica/index"
        options={{
          title: 'Grafica',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="level-up" color={color} />,
        }}
      />
      <Tabs.Screen
        name="manual/index"
        options={{
          title: 'Manual',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color} />,
        }}
      />
    </Tabs>
  );
}

