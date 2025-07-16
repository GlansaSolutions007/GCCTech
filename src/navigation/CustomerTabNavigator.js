import React from "react";
import { Image, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/Common/ProfileScreen";
import BookServiceScreen from "../screens/Customer/SchedulesTrack";
import ServiceList from "../screens/Customer/Servicelocations";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";
import { TaskReports } from "../screens/Customer/TaskReports";
import { color } from "../styles/theme";
import dashboard from '../../assets/icons/Navigation/techhom.png'
import TaskReportsicon from '../../assets/icons/Navigation/reports.png'
import SchedulesTrackicon from '../../assets/icons/Navigation/schedule.png'
import servicelocationsicon from '../../assets/icons/Navigation/LocationsPin.png'
import Profile from '../../assets/icons/Navigation/techProfile.png'
import Dashboard from "../screens/Customer/Dashboard";
import SchedulesTrack from "../screens/Customer/SchedulesTrack";
import Servicelocations from "../screens/Customer/Servicelocations";


const Tab = createBottomTabNavigator();

export default function CustomerTabNavigator({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        header: () => (
          <CustomHeader/>
        ),
        tabBarShowLabel: true,
        tabBarActiveTintColor: color.primary,
        tabBarInactiveTintColor: "#8e8e93",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0.5,
          height: 75 + insets.bottom,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 10,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 5,
        },
        tabBarItemStyle: {
          borderRadius: 20,
        },
        tabBarPressColor: "rgba(0, 0, 0, 0.01)",
        tabBarPressOpacity: 0.8,
        tabBarButton: (props) => (
          <Pressable
            android_ripple={{
              color: "rgba(0, 0, 0, 0.01)",
              borderless: false,
            }}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.9 : 1,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
            {...props}
          />
        ),
       tabBarIcon: ({ color, focused }) => {
  let iconSource;
  let iconStyle = {
    width: 26,
    height: 26,
    tintColor: focused ? color.primary : "#8e8e93",
  };

  switch (route.name) {
    case "Dashboard":
      iconSource = dashboard;
      break;
    case "Task & Reports":
      iconSource = TaskReportsicon;
      break;
    case "Schedules Track":
      iconSource = SchedulesTrackicon;
      break;
    case "service locations":
      iconSource = servicelocationsicon;
      break;
    case "Profile":
      iconSource = Profile;
      break;
    default:
      iconSource = null;
  }

  if (iconSource) {
    return (
      <Image
        source={iconSource}
        style={iconStyle}
        resizeMode="contain"
      />
    );
  }

  return null;
}

      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Task & Reports"component={TaskReports} />
      <Tab.Screen name="Schedules Track" component={SchedulesTrack} />
      <Tab.Screen name="service locations" component={Servicelocations} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
