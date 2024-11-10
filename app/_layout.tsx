import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useColorScheme } from "@/hooks/useColorScheme";
import NotFoundScreen from "./+not-found";
import HomeScreen from "./Stacks";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, House, Settings, Store } from "lucide-react-native";
import ShopPage from "./Stacks/shop";
import SearchBar from "@/components/globalStack/searchbar";
import ItemPage from "./Stacks/itempage";
import SignUpPage from "./Stacks/signuppage";
import SettingsPage from "./Stacks/settings";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <NavigationContainer independent>
        <Tab.Navigator
          screenOptions={{
            headerTitle: () => <SearchBar />,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ tabBarIcon: () => <Home color="black" /> }}
          />
          <Tab.Screen
            name="Shop"
            component={ShopPage}
            options={{
              tabBarIcon: () => <Store color="black" />,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsPage}
            options={{ tabBarIcon: () => <Settings color="black" /> }}
          />
          <Tab.Screen
            name="Item Page"
            component={ItemPage}
            options={{ tabBarItemStyle: { display: "none" } }}
          />
          <Tab.Screen
            name="Signup Page"
            component={SignUpPage}
            options={{ tabBarItemStyle: { display: "none" } }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
