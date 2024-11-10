import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";

export default function ItemPage() {
  const route = useRoute();
  const { id } = route.params;
  return (
    <View>
      <Text>You are on item {id}</Text>
    </View>
  );
}
