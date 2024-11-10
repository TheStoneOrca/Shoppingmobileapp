import { ReactElement } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function NavigationTab(props: {
  navigationLocation: string;
  name: string;
  userID: number;
  icon: ReactElement;
}) {
  return (
    <TouchableOpacity>
      <View
        style={{
          borderRadius: 12,
          backgroundColor: "white",
          width: 156,
          height: 156,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.icon}
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
}
