import ItemTab from "@/components/globalStack/itemtabs";
import OutGoingOrders from "@/components/homeStack/outgoingorders";
import { useFonts } from "expo-font";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [userData, setUserData] = useState<any>();
  const [isUserSignedIn, setIfUserIsSignedIn] = useState<boolean>();

  const [fontsLoaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }
  return (
    <View style={{ gap: 8 }}>
      <View>
        <Text style={{ fontFamily: "Poppins" }}>RECENTLY VIEWED</Text>
        <ScrollView scrollEnabled horizontal indicatorStyle="black">
          <View style={{ flexDirection: "row", gap: 15 }}>
            <ItemTab
              title="christmas"
              description="eugasdasdasdasdsadasdasasdeasdasdasd"
              price="11111111"
              image="/Users/josephiannuzzelli/Documents/CodeProjects/App/ShoppingApp/assets/images/christmas-6809681_1280.webp"
              stars={5}
              id={1}
            />
            <ItemTab
              title="christmas"
              description="eugasdasdasdasdsadasdasasdeasdasdasd"
              price="643232"
              image="/Users/josephiannuzzelli/Documents/CodeProjects/App/ShoppingApp/assets/images/christmas-6809681_1280.webp"
              stars={2}
              id={2}
            />
            <ItemTab
              title="christmas"
              description="eugasdasdasdasdsadasdasasdeasdasdasd"
              price="643232"
              image="/Users/josephiannuzzelli/Documents/CodeProjects/App/ShoppingApp/assets/images/christmas-6809681_1280.webp"
              stars={4.5}
              id={3}
            />
            <ItemTab
              title="christmas"
              description="eugasdasdasdasdsadasdasasdeasdasdasd"
              price="643232"
              image="/Users/josephiannuzzelli/Documents/CodeProjects/App/ShoppingApp/assets/images/christmas-6809681_1280.webp"
              stars={3}
              id={4}
            />
            <ItemTab
              title="christmas"
              description="eugasdasdasdasdsadasdasasdeasdasdasd"
              price="643232"
              image="/Users/josephiannuzzelli/Documents/CodeProjects/App/ShoppingApp/assets/images/christmas-6809681_1280.webp"
              stars={1}
              id={5}
            />
          </View>
        </ScrollView>
      </View>
      <View>
        <Text style={{ fontWeight: "bold" }}>HIGHLY RATED ITEMS</Text>
        <ScrollView scrollEnabled horizontal indicatorStyle="black">
          <View style={{ flexDirection: "row", gap: 15 }}>
            <ItemTab
              title="christmas"
              description="eugasdasdasdasdsadasdasasdeasdasdasd"
              price="11111111"
              image="/Users/josephiannuzzelli/Documents/CodeProjects/App/ShoppingApp/assets/images/christmas-6809681_1280.webp"
              stars={5}
              id={1}
            />
            <ItemTab
              title="christmas"
              description="eugasdasdasdasdsadasdasasdeasdasdasd"
              price="643232"
              image="/Users/josephiannuzzelli/Documents/CodeProjects/App/ShoppingApp/assets/images/christmas-6809681_1280.webp"
              stars={5}
              id={2}
            />
            <ItemTab
              title="christmas"
              description="eugasdasdasdasdsadasdasasdeasdasdasd"
              price="643232"
              image="/Users/josephiannuzzelli/Documents/CodeProjects/App/ShoppingApp/assets/images/christmas-6809681_1280.webp"
              stars={4}
              id={3}
            />
            <ItemTab
              title="christmas"
              description="eugasdasdasdasdsadasdasasdeasdasdasd"
              price="643232"
              image="/Users/josephiannuzzelli/Documents/CodeProjects/App/ShoppingApp/assets/images/christmas-6809681_1280.webp"
              stars={5}
              id={4}
            />
            <ItemTab
              title="christmas"
              description="eugasdasdasdasdsadasdasasdeasdasdasd"
              price="643232"
              image="/Users/josephiannuzzelli/Documents/CodeProjects/App/ShoppingApp/assets/images/christmas-6809681_1280.webp"
              stars={5}
              id={5}
            />
          </View>
        </ScrollView>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <OutGoingOrders userID={1} />
      </View>
    </View>
  );
}
