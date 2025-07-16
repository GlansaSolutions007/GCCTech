import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import CustomText from "../../components/CustomText";
import globalStyles from "../../styles/globalStyles";
import { color } from "../../styles/theme";
import profilepic from "../../../assets/images/person.jpg";

const { width } = Dimensions.get("window");

export default function ProfileScreen() {
  return (
    <View style={[globalStyles.bgwhite, globalStyles.p4, styles.container]}>
      <View style={[styles.card, globalStyles.bgprimary]}>
        {/* Avatar */}
        <View style={styles.avatarWrapper}>
          <Image source={profilepic} style={styles.avatar} />
        </View>

        {/* Name */}
        <CustomText style={[globalStyles.f20ExtraBold, globalStyles.textWhite, globalStyles.mb1]}>
          Naveen Nagam
        </CustomText>

        {/* Title */}
        <CustomText style={[globalStyles.f14Light, globalStyles.textWhite, globalStyles.mb4]}>
          Software Engineer
        </CustomText>

        {/* Email */}
        <View style={styles.infoRow}>
          <CustomText style={[globalStyles.f14Regular, globalStyles.textWhite]}>Email</CustomText>
          <CustomText style={[globalStyles.f16SemiBold, globalStyles.textWhite]}>
            naveen@example.com
          </CustomText>
        </View>

        {/* Phone */}
        <View style={styles.infoRow}>
          <CustomText style={[globalStyles.f14Regular, globalStyles.textWhite]}>Phone</CustomText>
          <CustomText style={[globalStyles.f16SemiBold, globalStyles.textWhite]}>
            +91 7780290335
          </CustomText>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: width - 40,
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
  },
  avatarWrapper: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 16,
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  infoRow: {
    width: "100%",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.3)",
  },
});
