import { TextProps, ViewStyle } from "react-native";

export const container: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};
export const container1: ViewStyle = {
  padding: 50,
  flex: 1,
  //    justifyContent: "center",
  //    alignItems: "center",
};

export const texto = {
  fontFamily: "Poppins",
  fontSize: 18,
};
export const texto2 = {
  fontSize: 12,
  width: 100
}
export const title = {
  fontFamily: "PoppinsBold",
  fontSize: 25,
};

export const imagen = {
  width: 200,
  height: 200,
};
export const imagen1 = {
  width: 320,
  height: 200,
};

export const barra = {
  backgroundColor: "transparent",
};

export const input = {
  borderWidth: 1,
  borderColor: "gray",
  borderRadius: 20,
  width: 100,
  padding: 5,
  fontFamily: "Poppins",
  height: 'fit-content'
};


export const opcion = {
  backgroundColor: "#9b40bf",
  borderRadius: 20,
  padding: 10,
  color: "white",
  margin: 10,
  alignItems: "center",
  width: "90%",
  // flex: 1,
  justifyContent: "center",
};

export const opcion1 = {
  backgroundColor: "#9b40bf",
  borderRadius: 20,
  padding: 10,
  color: "white",
  margin: 10,
  alignItems: "center",
  width: "50%",
  // flex: 1,
  justifyContent: "center",
};

export const back ={
  backgroundColor: "#9b40bf",
  borderRadius: 20,
  height: 'fit-content',
  paddingHorizontal: 20,
  paddingVertical: 10
}

export const inputContainer: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  marginVertical: 10,
  alignItems: 'center',
  justifyContent: 'center', 
  gap: 20,
};

export const btnContainer: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  height: 100,
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%'
};