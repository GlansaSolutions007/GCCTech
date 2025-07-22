import React from "react";
import {
  Image,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CustomText from "../components/CustomText";
import globalStyles from "../styles/globalStyles";
import leaveRequestImage from "../../assets/images/leave.png";

export default function LeaveRequest() {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      style={[globalStyles.bgcontainer]}
    >
      <View style={styles.imageContainer}>
        <Image
          source={leaveRequestImage}
          style={[styles.image, { width: 300, height: 330 }]}
        />
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button}>
          <CustomText style={[styles.buttonText, globalStyles.f16Bold]}>
            Request for leaves
          </CustomText>
        </TouchableOpacity>

        <CustomText style={[styles.subText, globalStyles.f12Regular]}>
          All the leave requests approved or denied by dealer
        </CustomText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  image: {
    width: 200,
    height: 220,
    resizeMode: "contain",
  },
  bottomContainer: {
    alignItems: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "#F8B400",
    paddingVertical: 14,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  subText: {
    fontSize: 13,
    color: "#999",
    textAlign: "center",
  },
});
