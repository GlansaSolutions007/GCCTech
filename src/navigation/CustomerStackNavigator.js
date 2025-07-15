import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomerTabNavigator from "./CustomerTabNavigator";
import CarModels from "../screens/Customer/CarModels";
import { MyCarsList } from "../screens/Customer/MyCarsList";
import MyCars from "../screens/Customer/MyCars";
import { MyCarDetails } from "../screens/Customer/MyCarDetails";
import RegisterScreen from "../screens/Common/RegisterScreen";
import InteriorService from "../screens/Customer/InteriorService";

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
        name="CarModels"
        component={CarModels}
        options={({ route }) => ({
          title: `${route.params.brand} Models`,
        })}
      />
      <Stack.Screen
        name="SelectCarBrand"
        component={MyCars} 
        options={{ title: "Select Your Car" }}
      />
      <Stack.Screen
        name="MyCarDetails"
        component={MyCarDetails} 
        options={{ title: "My Car Details" }}
      />
      <Stack.Screen
        name="InteriorService"
        component={InteriorService} 
        options={{ title: "interior Service" }}
      />
    
    </Stack.Navigator>
  );
}
