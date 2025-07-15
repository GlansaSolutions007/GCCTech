import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import globalStyles from '../../styles/globalStyles';
import CTAbannerhome from '../../../assets/images/CTAbannerhome.png'; 
import exteriorservice from '../../../assets/images/exteriorservice.png';
import bluecar from '../../../assets/images/bluecar.png';
export default function HomeScreen() {
  return (
  <ScrollView style={{ backgroundColor: '#fff' }} contentContainerStyle={{ paddingBottom: 30 }}>
        <View style={globalStyles.header}>
          <CustomText style={globalStyles.greeting}>Hello User</CustomText>
          <View style={globalStyles.locationRow}>
            <CustomText style={globalStyles.location}>Hyderabad, Telangana</CustomText>
            <Ionicons name="chevron-down" size={16} color="#fff" />
          </View>
        </View>
  
        <View style={globalStyles.banner}>
          <Image source={bluecar} style={globalStyles.carImage} resizeMode="contain" />
          <CustomText style={globalStyles.bannerTitle}>
            MY <CustomText>CAR</CustomText> BUDDY
          </CustomText>
          <CustomText style={globalStyles.bannerSubtitle}>
            A Professional Car Care Services in Hyderabad
          </CustomText>
        </View>
  
        <CustomText style={globalStyles.sectionTitle}>Browse Services</CustomText>
        <View style={globalStyles.services}>
          <TouchableOpacity style={globalStyles.card}>
            <Image source={exteriorservice} style={globalStyles.cardImage} />
            <CustomText style={globalStyles.cardText}>Interior Service</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.card}>
            <Image source={exteriorservice} style={globalStyles.cardImage} />
            <CustomText style={globalStyles.cardText}>Exterior Service</CustomText>
          </TouchableOpacity>
        </View>
  
        <View style={globalStyles.ctaContainer}>
          <View style={globalStyles.ctaTextContainer}>
            <CustomText style={globalStyles.ctaTitle}>Give your car’s intro to your care buddy</CustomText>
            <CustomText style={globalStyles.ctaSubTitle}>We’ll remember it, pamper it, and keep it shining.</CustomText>
          </View>
          <Image source={CTAbannerhome} style={globalStyles.ctaImage} />
        </View>
  
        <TouchableOpacity style={globalStyles.ctaButton}>
          <CustomText style={globalStyles.ctaButtonText}>Add My Car</CustomText>
        </TouchableOpacity>
      </ScrollView>
  );
}