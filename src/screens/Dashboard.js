import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import { color } from "../styles/theme";
import { Ionicons } from "@expo/vector-icons";
import profilepic from "../../assets/images/person.jpg";
import CustomText from "../components/CustomText";

export default function Dashboard() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <ScrollView
      style={[{ backgroundColor: color.textWhite }]}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <View style={[globalStyles.bgcontainer, globalStyles.container]}>
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
            <Text style={[globalStyles.f16SemiBold, globalStyles.textWhite]}>
              Wednesday, July 16
            </Text>
            <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
              <Text style={[globalStyles.f28Bold, globalStyles.textWhite]}>
                Today
              </Text>
              <Text style={[globalStyles.f16Light, globalStyles.neutral100]}>
                (Online)
              </Text>
            </View>
          </View>
          <Switch
            value={isOnline}
            onValueChange={(value) => setIsOnline(value)}
            trackColor={{ false: "#ccc", true: "#a0e6e7" }}
            thumbColor={isOnline ? color.secondary : "#f4f3f4"}
          />
        </View>

        <View
          style={[
            globalStyles.card,
            globalStyles.bgwhite,
            globalStyles.p4,
            globalStyles.mt5,
          ]}
        >
          <Text style={[globalStyles.f16Bold, globalStyles.alineSelfend]}>
            Todays Service Bookings
          </Text>

          <Text
            style={[
              globalStyles.f44Bold,
              globalStyles.primary,
              globalStyles.mb2,
              globalStyles.alineSelfend,
            ]}
          >
            04
          </Text>
          <View style={globalStyles.divider} />

          <View style={[globalStyles.flexrow, globalStyles.justifysb]}>
            <IconLabel icon="time-outline" label="8 hrs" />
            <IconLabel icon="people-outline" label="2 customers" />
            <IconLabel icon="checkmark-circle-outline" label="2 Active" />
          </View>
        </View>

        <View style={[globalStyles.mt4]}>
          <Text style={[globalStyles.f14Bold, globalStyles.mb2]}>
            Next Active Service
          </Text>

          <Text style={[globalStyles.f32Regular, globalStyles.neutral300]}>
            There are no{" "}
          </Text>
          <View style={[globalStyles.flexrow]}>
            <Text style={[globalStyles.primary, globalStyles.f32Bold]}>
              active services{" "}
            </Text>
            <Text style={[globalStyles.f32Regular, , globalStyles.neutral200]}>
              yet....
            </Text>
          </View>


{/* carddddd11111111111 */}
          <View
            style={[
              globalStyles.bgprimary,
              globalStyles.p4,
              globalStyles.card,
              globalStyles.mt5,
            ]}
          >
            <View style={[globalStyles.flexrow]}>
              <Image source={profilepic} style={styles.avatar} />

              <View style={[globalStyles.ml3, { flex: 1 }]}>
                <Text style={[globalStyles.f28Bold, globalStyles.textWhite]}>
                  Jhon Dio
                </Text>
                <Text style={[globalStyles.f16Medium, globalStyles.textWhite]}>
                  Mobile: 7780290335
                </Text>
                <Text style={[globalStyles.f12Light, globalStyles.neutral100]}>
                  #B1 Spaces & More Business Park #M3 Dr.No.#1-89/A/8, C/2,
                  Vittal Rao Nagar Rd, Madhapur, Telangana 500081
                </Text>
              </View>
            </View>

            <View style={globalStyles.divider} />

            <Text
              style={[
                globalStyles.f16Medium,
                globalStyles.textWhite,
                globalStyles.alineSelfcenter,
                globalStyles.mb35,
              ]}
            >
              <Text style={globalStyles.f16Bold}>Service:</Text> Leather Fabric
              Seat Polishing
            </Text>
          </View>

          <View
            style={[
              globalStyles.flexrow,
              globalStyles.justifysb,
              globalStyles.ph4,
              globalStyles.mt4,
              styles.service,
            ]}
          >
            <TouchableOpacity style={styles.startButton}>
              <Text style={[globalStyles.f14Bold, globalStyles.textWhite]}>
                Start The Service
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.denyButton}>
              <Text style={[globalStyles.f14Bold, globalStyles.black]}>
                Deny service
              </Text>
            </TouchableOpacity>
          </View>


{/* carddddd2222222222222 */}

          <View
            style={[globalStyles.bgprimary, globalStyles.p4, globalStyles.card]}
          >
            <View style={[globalStyles.flexrow]}>
              <Image source={profilepic} style={styles.avatar} />

              <View style={[globalStyles.ml3, { flex: 1 }]}>
                <Text style={[globalStyles.f28Bold, globalStyles.textWhite]}>
                  Jhon Dio
                </Text>
                <Text style={[globalStyles.f16Medium, globalStyles.textWhite]}>
                  Mobile: 7780290335
                </Text>
                <Text style={[globalStyles.f12Light, globalStyles.neutral100]}>
                  #B1 Spaces & More Business Park #M3 Dr.No.#1-89/A/8, C/2,
                  Vittal Rao Nagar Rd, Madhapur, Telangana 500081
                </Text>
              </View>
            </View>

            <View style={globalStyles.divider} />

            <Text
              style={[
                globalStyles.f16Medium,
                globalStyles.textWhite,
                globalStyles.alineSelfcenter,
                globalStyles.mb4,
              ]}
            >
              <Text style={globalStyles.f16Bold}>Service:</Text> Leather Fabric
              Seat Polishing
            </Text>
            <View
              style={[
                globalStyles.flexrow,
                globalStyles.justifysb,
                globalStyles.alineItemscenter,
                styles.card,
              ]}
            >
              <View>
                <Text style={[globalStyles.f16Bold]}>Est: 8hrs</Text>
                <Text style={[globalStyles.f28Bold, globalStyles.primary]}>
                  00:02:01
                </Text>
              </View>

              <View style={[globalStyles.flexrow]}>
                <TouchableOpacity
                  style={[styles.pauseButton, globalStyles.mr2]}
                >
                  <Text style={[globalStyles.f14Bold, globalStyles.textWhite]}>
                    Pause
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.completedButton}>
                  <Text style={[globalStyles.f14Bold, globalStyles.textWhite]}>
                    Completed
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function IconLabel({ icon, label }) {
  return (
    <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
      <Ionicons
        name={icon}
        size={18}
        color={color.primary}
        style={{ marginRight: 5 }}
      />
      <Text style={globalStyles.f14Bold}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 16,
  },

  timerCard: {
    backgroundColor: color.white,
    borderRadius: 16,
    padding: 16,
  },
  pauseButton: {
    backgroundColor: color.black,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  completedButton: {
    backgroundColor: color.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  card: {
    borderRadius: 12,
    backgroundColor: color.white,
    padding: 10,
  },
  service: {
    position: "relative",
    top: -45,
  },
  avatar: {
    width: 70,
    height: 100,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: color.white,
  },

  startButton: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: "center",
  },
  denyButton: {
    backgroundColor: "#FDB827",
    padding: 16,
    borderRadius: 8,
    flex: 1,
    marginLeft: 8,
    alignItems: "center",
  },
});
