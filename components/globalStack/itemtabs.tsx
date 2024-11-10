import { useNavigation } from "@react-navigation/native";
import { Star, StarIcon } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function ItemTab(props: {
  image: string;
  title: string;
  price: string;
  description: string;
  stars: number;
  id: number;
}) {
  const navigation = useNavigation();
  const starAmmount = [];
  for (let i = 0; i < props.stars; i++) {
    starAmmount.push({ id: i });
  }

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Item Page", { id: props.id });
      }}
    >
      <View>
        <Image
          style={{
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            width: 156,
            height: 156 / 2,
          }}
          src={props.image}
        />
        <View
          style={{
            backgroundColor: "white",
            borderBottomRightRadius: 12,
            borderBottomLeftRadius: 12,
            width: 156,
            height: 156 / 2,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Text
              style={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                color: "black",
              }}
            >
              {props.title.toUpperCase()}
            </Text>
            <Text style={{ color: "gray" }}>
              ${props.price > 999999 ? 999999 : props.price}
            </Text>
          </View>
          <Text style={{ fontSize: 12 }}>{props.description}</Text>
          <View style={{ flexDirection: "row" }}>
            {starAmmount.map((item) => (
              <StarIcon key={item.id} color="black" />
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
