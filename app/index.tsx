import { container, input } from "@/constants/Styles";
import { Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View style={container}>
      <TextInput style={input} keyboardType="number-pad" />
    </View>
  );
}
