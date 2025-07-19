import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomText from "../../components/CustomText";
import globalStyles from "../../styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import profilepic from "../../../assets/images/persontwo.jpg";
import { color } from "../../styles/theme";
import locationicon from "../../../assets/icons/Navigation/LocationsPin.png";
import person from "../../../assets/icons/Navigation/techProfile.png";
import { useNavigation } from "@react-navigation/native";
import AvailabilityHeader from "../../components/AvailabilityHeader";
export default function ProfileScreen() {
  const [isOnline, setIsOnline] = useState(true);

  const navigation = useNavigation();
  const review = () => {
    navigation.navigate("reviews");
  };
  return (
    <ScrollView style={[globalStyles.bgcontainer]}>
      <View style={globalStyles.container}>
        <AvailabilityHeader />
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
            <CustomText style={[globalStyles.f12Medium]}>
              Mobile: 9988776655
            </CustomText>
            <CustomText style={[globalStyles.f12Medium]}>
              Email : bhuvan@carbuddy.com
            </CustomText>
            <View
              style={[
                globalStyles.flexrow,
                globalStyles.mt2,
                globalStyles.alineItemscenter,
              ]}
            >
              <View style={styles.iconbg}>
                <Image source={locationicon} style={styles.icons} />
              </View>
              <CustomText style={globalStyles.f12Bold}>
                Telangana, Hyderabad
              </CustomText>
            </View>
            <View
              style={[
                globalStyles.flexrow,
                globalStyles.mt1,
                globalStyles.alineItemscenter,
              ]}
            >
              <View style={styles.iconbg}>
                <Image source={person} style={styles.icons} />
              </View>

              <CustomText style={globalStyles.f12Bold}>
                Dealer: Shantanu
              </CustomText>
            </View>
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
            <TouchableOpacity onPress={review}>
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
            </TouchableOpacity>
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
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("leaveRequest")}
              style={[
                globalStyles.flexrow,
                globalStyles.justifysb,
                globalStyles.mv3,
              ]}
            >
              <CustomText>Leave Request</CustomText>
              <Ionicons name="chevron-forward" size={16} color="#333" />
            </TouchableOpacity>
            <View style={styles.divider} />
          </View>
        </View>
        <View>
          <View>
            <TouchableOpacity
              style={[
                globalStyles.flexrow,
                globalStyles.justifysb,
                globalStyles.mv3,
              ]}
            >
              <CustomText>About App</CustomText>
              <Ionicons name="chevron-forward" size={16} color="#333" />
            </TouchableOpacity>
            <View style={styles.divider} />
          </View>
        </View>
        <View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("privacyPolicy")}
              style={[
                globalStyles.flexrow,
                globalStyles.justifysb,
                globalStyles.mv3,
              ]}
            >
              <CustomText>Technician Privacy Policy</CustomText>
              <Ionicons name="chevron-forward" size={16} color="#333" />
            </TouchableOpacity>
            <View style={styles.divider} />
          </View>
        </View>
        <View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("termsAndConditions")}
              style={[
                globalStyles.flexrow,
                globalStyles.justifysb,
                globalStyles.mv3,
              ]}
            >
              <CustomText>Terms & Conditions</CustomText>
              <Ionicons name="chevron-forward" size={16} color="#333" />
            </TouchableOpacity>
            <View style={styles.divider} />
          </View>
        </View>
        <View>
          <View>
            <TouchableOpacity
              style={[
                globalStyles.flexrow,
                globalStyles.justifysb,
                globalStyles.mv3,
              ]}
            >
              <CustomText>Inventory Items Request</CustomText>
              <Ionicons name="chevron-forward" size={16} color="#333" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: color.neutral[100],
  },
  icons: {
    width: 11,
    height: 16,
  },
  iconbg: {
    padding: 6,
    height: 30,
    width: 30,
    backgroundColor: color.white,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  container: {
    flex: 1,
  },
  avatar: {
    width: 130,
    height: 150,
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
    alignItems: "center",
    marginBottom: 16,
  },
});
