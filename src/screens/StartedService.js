import React, { useState } from 'react';
import {
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import CustomText from '../components/CustomText';
import globalStyles from '../styles/globalStyles';
import AvailabilityHeader from '../components/AvailabilityHeader';
import { color } from '../styles/theme';
import helpcall from'../../assets/icons/Customer Care.png'

export default function StartedService() {
  const [images, setImages] = useState([]);
  const [reason, setReason] = useState('');

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 0.5,
    });

    if (!result.canceled) {
      const selected = result.assets.map((asset) => asset.uri);
      setImages((prev) => [...prev, ...selected].slice(0, 5)); 
    }
  };

  const removeImage = (index) => {
    const filtered = images.filter((_, i) => i !== index);
    setImages(filtered);
  };

  return (
    <ScrollView style={globalStyles.bgcontainer}>
      <View style={[globalStyles.container]}>
                <AvailabilityHeader />

        <CustomText style={[globalStyles.f20Bold, globalStyles.primary]}>
          Booking ID: <CustomText style={globalStyles.black}>TG234518</CustomText>
        </CustomText>

        <CustomText style={[globalStyles.f14Bold, globalStyles.mt4]}>
          Want to upload before service images?
        </CustomText>
        <CustomText style={[globalStyles.f10Light,globalStyles.neutral500, globalStyles.mt1]}>
          My dear buddy, upload maximum 4-5 images
        </CustomText>

        <TouchableOpacity
          style={[globalStyles.inputBox, globalStyles.mt3]}
          onPress={pickImage}
        >
          <CustomText style={[globalStyles.f16Light,globalStyles.neutral500]}>Choose Files</CustomText>
        </TouchableOpacity>

        {images.length > 0 && (
          <View style={[globalStyles.flexrow, globalStyles.justifystart, globalStyles.mt3, { flexWrap: 'wrap' }]}>
            {images.map((uri, index) => (
              <View key={index} style={{ marginRight: 10, marginBottom: 10, position: 'relative' }}>
                <Image
                  source={{ uri }}
                  style={{ width: 70, height: 70, borderRadius: 10 }}
                />
                <TouchableOpacity
                  onPress={() => removeImage(index)}
                  style={{
                    position: 'absolute',
                    top: -6,
                    right: -6,
                    backgroundColor: '#000',
                    borderRadius: 10,
                    padding: 2,
                    zIndex: 1,
                  }}
                >
                  <Ionicons name="close" color="#fff" size={12} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

       

       

         <View
          style={[
            globalStyles.flexrow,
            globalStyles.justifysb,
            globalStyles.mt4,
            globalStyles.bgprimary,
            globalStyles.p4,
            globalStyles.borderRadiuslarge,
          ]}
        >
          <View style={globalStyles.alineSelfcenter}>
            <CustomText
              style={[globalStyles.f12Medium, globalStyles.textWhite]}
            >
              Estimated Time
            </CustomText>
            <CustomText style={[globalStyles.f32Bold, globalStyles.textWhite]}>
              1 hr 30 min
            </CustomText>
          </View>
          <View style={styles.pricecard}>
            <CustomText style={[globalStyles.f16Bold, globalStyles.black]}>
              Lets Start
            </CustomText>
          </View>
        </View>

        <CustomText style={[globalStyles.f24Bold, globalStyles.mt5,globalStyles.primary ]}>
          <CustomText style={[globalStyles.neutral500,globalStyles.f24Medium]}>Hey</CustomText> Buddy
        </CustomText>
        <CustomText style={[globalStyles.f12Regular,globalStyles.neutral500, globalStyles.mt2]}>
          If the estimation time exceeded. Please feel free to mention the reason
        </CustomText>

        <TextInput
          style={[globalStyles.textArea, globalStyles.mt3]}
          placeholder="eg. Sick leave..., Going to village"
          value={reason}
          onChangeText={setReason}
          maxLength={100}
          multiline
        />

        <View style={[globalStyles.flexrow, globalStyles.justifycenter, globalStyles.mt4]}>
          <TouchableOpacity
            style={[
              globalStyles.flex1,
              { backgroundColor: color.fullredLight, padding: 16, borderRadius: 10, marginRight: 8 },
            ]}
          >
            <CustomText style={[globalStyles.textWhite, globalStyles.textac]}>Cancel service</CustomText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              globalStyles.flex1,
              { backgroundColor: '#000', padding: 16, borderRadius: 10, marginLeft: 8 },
            ]}
          >
            <View style={[globalStyles.flexrow, globalStyles.justifycenter, globalStyles.alineItemscenter]}>
              <Image source={helpcall}/>
              <CustomText style={globalStyles.textWhite}>Call help line</CustomText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
 pricecard: {
    backgroundColor: color.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent:"center",
    borderRadius: 10,
  },
});
