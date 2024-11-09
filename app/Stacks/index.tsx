import ItemTab from "@/components/homeStack/itemtabs";
import { useFonts } from "expo-font";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Poppins" }}>MOST COMMONLY BOUGHT</Text>
      <ScrollView scrollEnabled horizontal indicatorStyle="black">
        <View style={{ flexDirection: "row", gap: 15 }}>
          <ItemTab
            title="christmas"
            description="eugasdasdasdasdsadasdasasdeasdasdasd"
            price="11111111"
            image="/Users/josephiannuzzelli/Documents/CodeProjects/App/ShoppingApp/assets/images/christmas-6809681_1280.webp"
            stars={5}
          />
          <ItemTab
            title="christmas"
            description="eugasdasdasdasdsadasdasasdeasdasdasd"
            price="643232"
            image="/Users/josephiannuzzelli/Documents/CodeProjects/App/ShoppingApp/assets/images/christmas-6809681_1280.webp"
            stars={2}
          />
          <ItemTab
            title="christmas"
            description="eugasdasdasdasdsadasdasasdeasdasdasd"
            price="643232"
            image="/Users/josephiannuzzelli/Documents/CodeProjects/App/ShoppingApp/assets/images/christmas-6809681_1280.webp"
            stars={4.5}
          />
          <ItemTab
            title="christmas"
            description="eugasdasdasdasdsadasdasasdeasdasdasd"
            price="643232"
            image="/Users/josephiannuzzelli/Documents/CodeProjects/App/ShoppingApp/assets/images/christmas-6809681_1280.webp"
            stars={3}
          />
          <ItemTab
            title="christmas"
            description="eugasdasdasdasdsadasdasasdeasdasdasd"
            price="643232"
            image="/Users/josephiannuzzelli/Documents/CodeProjects/App/ShoppingApp/assets/images/christmas-6809681_1280.webp"
            stars={1}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
