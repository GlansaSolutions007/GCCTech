import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import CustomText from "../../components/CustomText";
import globalStyles from "../../styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import profilepic from "../../../assets/images/person.jpg";
import { color } from "../../styles/theme";

export default function ProfileScreen() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <ScrollView
      style={[globalStyles.bgcontainer]}
      contentContainerStyle={[globalStyles.p4]}
    >
      <View
        style={[
          globalStyles.bgprimary,
          globalStyles.p4,
          globalStyles.borderRadiuslarge,
          globalStyles.flexrow,
          globalStyles.justifysb,
          globalStyles.alineItemscenter,
        ]}
      >
        <View>
          <CustomText
            style={[globalStyles.f16SemiBold, globalStyles.textWhite]}
          >
            Wednesday, July 16
          </CustomText>
          <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
            <CustomText style={[globalStyles.f28Bold, globalStyles.textWhite]}>
              Today
            </CustomText>
            <CustomText
              style={[globalStyles.f16Light, globalStyles.neutral100]}
            >
              (Online)
            </CustomText>
          </View>
        </View>
        <Switch
          value={isOnline}
          onValueChange={(value) => setIsOnline(value)}
          trackColor={{ false: "#ccc", true: "#a0e6e7" }}
          thumbColor={isOnline ? color.secondary : "#f4f3f4"}
        />
      </View>
      <View style={[globalStyles.flexrow, globalStyles.mv5]}>
        <View
          style={[
            globalStyles.alineItemscenter,
            globalStyles.mb3,
            globalStyles.mr4,
          ]}
        >
          <Image source={profilepic} style={styles.avatar} />
        </View>
        <View>
          <CustomText style={[globalStyles.f24Bold, globalStyles.primary]}>
            Bhuvan Raj
          </CustomText>
          <CustomText style={[globalStyles.f16Medium]}>
            Mobile: 9988776655
          </CustomText>
          <CustomText style={[globalStyles.f16Medium]}>
            Email : bhuvan@carbuddy.com
          </CustomText>
          <View style={[globalStyles.flexrow, globalStyles.mt2]}>
            <Ionicons
              name="location-outline"
              size={16}
              color="#333"
              style={globalStyles.mr2}
            />
            <CustomText style={globalStyles.f12Bold}>
              Telangana, Hyderabad
            </CustomText>
          </View>
          <View style={[globalStyles.flexrow, globalStyles.mt1]}>
            <Ionicons
              name="person-outline"
              size={16}
              color="#333"
              style={globalStyles.mr2}
            />
            <CustomText style={globalStyles.f12Bold}>
              Dealer: Shantanu
            </CustomText>
          </View>
        </View>
      </View>

      {/* Stats Card */}
      <View style={[styles.statsCard]}>
        <View style={[globalStyles.flexrow, globalStyles.justifycenter]}>
          {[1, 2, 3].map((_, i) => (
            <Ionicons
              key={i}
              name="star"
              size={18}
              color={color.primary}
              style={globalStyles.mr2}
            />
          ))}
        </View>
        <View style={styles.gridContainer}>
          <View style={styles.gridItem}>
            <CustomText
              style={[
                globalStyles.f40Bold,
                globalStyles.alineSelfcenter,
                globalStyles.primary,
              ]}
            >
              15
            </CustomText>
            <CustomText>Services Completed</CustomText>
          </View>
          <View style={styles.gridItem}>
            <CustomText
              style={[
                globalStyles.f40Bold,
                globalStyles.alineSelfcenter,
                globalStyles.primary,
              ]}
            >
              4.5
            </CustomText>
            <CustomText>Review Ratings</CustomText>
          </View>
          <View style={styles.gridItem}>
            <CustomText
              style={[
                globalStyles.f40Bold,
                globalStyles.alineSelfcenter,
                globalStyles.primary,
              ]}
            >
              10+
            </CustomText>
            <CustomText>Served Customers</CustomText>
          </View>
          <View style={styles.gridItem}>
            <CustomText
              style={[
                globalStyles.f40Bold,
                globalStyles.alineSelfcenter,
                globalStyles.primary,
              ]}
            >
              108
            </CustomText>
            <CustomText>Kilometers Traveled</CustomText>
          </View>
        </View>
        <View style={globalStyles.mt4}>
          {[
            "Leave Request",
            "About App",
            "Technician Privacy Policy",
            "Terms & Conditions",
            "Inventory Items Request",
          ].map((label, index) => (
            <TouchableOpacity
              key={index}
              style={[
                globalStyles.flexrow,
                globalStyles.justifysb,
                globalStyles.mv3,
              ]}
            >
              <CustomText>{label}</CustomText>
              <Ionicons name="chevron-forward" size={16} color="#333" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: 130,
    height: 130,
    borderWidth: 8,
    borderColor: color.white,
    borderRadius: 8,
  },
  switchBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  statsCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 0,
    padding: 16,
  },
  gridContainer: {
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "45%",
    marginBottom: 16,
  },
});
