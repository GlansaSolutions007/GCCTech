import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomerTabNavigator from "./CustomerTabNavigator";
import MyCars from "../screens/MyCars";
import InteriorService from "../screens/InteriorService";
import TaskReportsScreen from "../screens/TaskReportsScreen";

const Stack = createNativeStackNavigator();

export default function CustomerStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CustomerTabNavigator"
        component={CustomerTabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SelectCarBrand"
        component={MyCars}
        options={{ title: "Select Your Car" }}
      />
      <Stack.Screen name="Task & Reports" component={TaskReportsScreen} />

      <Stack.Screen
        name="InteriorService"
        component={InteriorService}
        options={{ title: "interior Service" }}
      />
    </Stack.Navigator>
  );
}
