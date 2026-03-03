import { ClerkProvider } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TripProvider } from "./context/TripContext";
import "./global.css";
import TabNavigator from "./navigation/TabNavigator";
import * as SecureStore from "expo-secure-store";
import RootNavigator from "./navigation/RootNavigator";
//testing code
import { GestureHandlerRootView } from "react-native-gesture-handler";

const tokenCache = {
  async getToken(key: string) {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return await SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ClerkProvider
        publishableKey=""
        tokenCache={tokenCache}
      >
        <TripProvider>
          <NavigationContainer>
            {/* <TabNavigator /> */}
            <RootNavigator />
          </NavigationContainer>
        </TripProvider>
      </ClerkProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
