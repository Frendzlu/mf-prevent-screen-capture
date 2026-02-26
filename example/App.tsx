import { MfPreventScreenCaptureView } from "mf-prevent-screen-capture";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

function ProtectedScreen() {
  return (
    <MfPreventScreenCaptureView style={styles.flex}>
      <View style={styles.screen}>
        <Text style={styles.title}>Protected</Text>
        <Text style={styles.body}>This content is hidden in screenshots.</Text>
      </View>
    </MfPreventScreenCaptureView>
  );
}

function UnprotectedScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Unprotected</Text>
      <Text style={styles.body}>This content is visible in screenshots.</Text>
    </View>
  );
}

function ProtectedScreen2() {
  return (
    <MfPreventScreenCaptureView style={styles.flex}>
      <View style={styles.screen}>
        <Text style={styles.title}>Protected 2</Text>
        <Text style={styles.body}>
          This is another protected tab. Unmounting one protected tab should not
          disable protection while this one is still mounted.
        </Text>
      </View>
    </MfPreventScreenCaptureView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarIconStyle: { display: "none" },
            tabBarLabelPosition: "beside-icon",
          }}
        >
          <Tab.Screen
            name="Protected"
            component={ProtectedScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Unprotected"
            component={UnprotectedScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Protected 2"
            component={ProtectedScreen2}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  screen: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
  title: { fontSize: 24, fontWeight: "700" },
  body: { fontSize: 15, color: "#555" },
});
