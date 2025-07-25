import React, { useState } from "react";
import { ScrollView, View, Image, TouchableOpacity } from "react-native";
import CustomText from "../components/CustomText";
import globalStyles from "../styles/globalStyles";
import { useRoute } from "@react-navigation/native";
import buddy from "../../assets/images/buddy.png";
import { Ionicons } from "@expo/vector-icons";
import { color } from "../styles/theme";

const formatReadableTime = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  return `${hrs > 0 ? `${hrs} hr ` : ""}${mins} min`;
};

const initialServices = [
  { id: 1, label: "Leather Fabric Seat Polishing", completed: false },
  { id: 2, label: "AC Vent Sanitization", completed: false },
  { id: 3, label: "Mat Washing & Vacuuming", completed: false },
];

export default function ServiceEnd() {
  const route = useRoute();
  const { estimatedTime = 0, actualTime = 0 } = route.params || {};
  const extendedTime =
    actualTime > estimatedTime ? actualTime - estimatedTime : 0;

  const [services, setServices] = useState(initialServices);

  const toggleService = (id) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id
          ? { ...service, completed: !service.completed }
          : service
      )
    );
  };

  return (
    <ScrollView style={globalStyles.bgcontainer}>
      <View style={{ padding: 20 }}>
        <CustomText style={[globalStyles.f18Medium, globalStyles.primary]}>
          Booking ID: TG234518
        </CustomText>

        <View style={{ marginTop: 12 }}>
          <CustomText
            style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}
          >
            Please check completed services
          </CustomText>

          {services.map((service) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <TouchableOpacity
                key={service.id}
                onPress={() => toggleService(service.id)}
              >
                <Ionicons
                  name={service.completed ? "checkbox" : "square-outline"}
                  size={24}
                  color={service.completed ? "#0D9276" : "#999"}
                />
              </TouchableOpacity>
              <CustomText style={{ marginLeft: 10 }}>
                {service.label}
              </CustomText>
            </View>
          ))}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 24,
          }}
        >
          <View
            style={{
              backgroundColor: "#1A9C8D",
              borderRadius: 10,
              paddingVertical: 12,
              paddingHorizontal: 16,
              flex: 1,
              marginRight: 8,
              alignItems: "center",
            }}
          >
            <CustomText style={{ color: "white", fontWeight: "600" }}>
              Estimated Time
            </CustomText>
            <CustomText
              style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
            >
              {formatReadableTime(estimatedTime)}
            </CustomText>
          </View>

          <View
            style={{
              backgroundColor: "#F4A100",
              borderRadius: 10,
              paddingVertical: 12,
              paddingHorizontal: 16,
              flex: 1,
              marginLeft: 8,
              alignItems: "center",
            }}
          >
            <CustomText style={{ color: "white", fontWeight: "600" }}>
              Extended Time
            </CustomText>
            <CustomText
              style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
            >
              {extendedTime > 0 ? formatReadableTime(extendedTime) : "0 min"}
            </CustomText>
          </View>
        </View>

        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <Image
            source={buddy}
            resizeMode="contain"
            style={{ width: 200, height: 200 }}
          />
        </View>

        <View
          style={{
            backgroundColor: "#000",
            paddingVertical: 14,
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <CustomText style={{ color: "white", fontSize: 16 }}>
            Total Hours
          </CustomText>
          <CustomText
            style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
          >
            {formatReadableTime(actualTime)}
          </CustomText>
        </View>
      </View>
    </ScrollView>
  );
}
