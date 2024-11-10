import { Pressable, Text, View } from "react-native";
import OutGoingOrderTab from "./outgoingordertab";

export default function OutGoingOrders(props: { userID: number }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        width: 326,
        height: 275,
        borderRadius: 12,
        flexDirection: "column",
      }}
    >
      <Text style={{ fontWeight: "bold" }}>OUTGOING ORDERS</Text>
      <View style={{ gap: 24, alignItems: "center" }}>
        <OutGoingOrderTab />
        <OutGoingOrderTab />
        <OutGoingOrderTab />
      </View>
      <Pressable>
        <Text style={{ color: "blue" }}>View All</Text>
      </Pressable>
    </View>
  );
}
