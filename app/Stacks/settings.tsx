import NavigationTab from "@/components/settingsStack/navigationTab";
import {
  Heart,
  MessageCircle,
  PersonStanding,
  Truck,
} from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SettingsPage() {
  return (
    <View style={{ gap: 12, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 28,
        }}
      >
        <NavigationTab
          userID={1}
          navigationLocation="Orders"
          name="Orders"
          icon={<Truck color="black" size={64} />}
        />
        <NavigationTab
          userID={1}
          navigationLocation="Account"
          name="Account"
          icon={<PersonStanding color="black" size={64} />}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 28,
        }}
      >
        <NavigationTab
          userID={1}
          navigationLocation="Review"
          name="Review"
          icon={<MessageCircle size={64} color="black" />}
        />
        <NavigationTab
          userID={1}
          navigationLocation="Favorites"
          name="Favorites"
          icon={<Heart color="black" size={64} />}
        />
      </View>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.2 }]}
      >
        <Text>Switch Accounts</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.2 }]}
      >
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 6,
    width: 256,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});
