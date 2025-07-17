import React from 'react';
import { View, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from '../components/CustomText';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import globalStyles from '../styles/globalStyles';
import profile1 from '../../assets/images/person.jpg'; // ✅ make sure this exists

const reviews = [
  {
    id: '1',
    name: 'Jhon Dio',
    time: '3 hrs ago',
    image: profile1,
    text: "The technician was on time and very professional. My car’s interior feels brand new. Super polite and made sure everything was spotless. Highly recommend!",
  },
  {
    id: '2',
    name: 'Kapil Sharma',
    time: '16 July 2025',
    image: profile1,
    text: "The technician was on time and very professional. My car’s interior feels brand new. Super polite and made sure everything was spotless. Highly recommend!.....",
  },
];

export default function Reviews() {
  return (
    <View style={[globalStyles.container, globalStyles.p2]}>
      {/* Header */}
      <View style={[globalStyles.flexrow, globalStyles.justifysb, globalStyles.alineItemscenter, globalStyles.mb3]}>
        <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
          <CustomText style={[globalStyles.font18, globalStyles.fontWeight700]}>4.9</CustomText>
          <View style={[globalStyles.flexrow, globalStyles.ml1]}>
            {[...Array(5)].map((_, i) => (
              <AntDesign key={i} name="star" size={14} color="#00B67A" style={globalStyles.mr1} />
            ))}
          </View>
          <CustomText style={[globalStyles.ml2, globalStyles.font14, { color: '#666' }]}>3 Reviews</CustomText>
        </View>

        <CustomText style={[globalStyles.font14, globalStyles.fontWeight600]}>
          Sort by:{' '}
          <CustomText style={{ color: '#00B67A' }}>Superb ▼</CustomText>
        </CustomText>
      </View>

      {/* Reviews */}
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={[styles.card, globalStyles.mb3]}>
            <View style={[globalStyles.flexrow, globalStyles.justifysb, globalStyles.alineItemscenter]}>
              <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
                <Image source={item.image} style={styles.avatar} />
                <View style={globalStyles.ml2}>
                  <CustomText style={[globalStyles.fontWeight700, globalStyles.font16, { color: '#2E2E2E' }]}>
                    {item.name}
                  </CustomText>
                  <View style={[globalStyles.flexrow]}>
                    {[...Array(5)].map((_, i) => (
                      <AntDesign key={i} name="star" size={14} color="#00B67A" style={globalStyles.mr1} />
                    ))}
                  </View>
                </View>
              </View>
              <CustomText style={[globalStyles.font14, { color: '#A4A4A4' }]}>{item.time}</CustomText>
            </View>

            <CustomText style={[globalStyles.mt2, globalStyles.font14, { color: '#4B4B4B' }]}>
              {item.text}
            </CustomText>

            {item.text.endsWith('.....') && (
              <TouchableOpacity style={styles.readMoreButton}>
                <MaterialIcons name="keyboard-arrow-down" size={22} color="#fff" />
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    position: 'relative',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  readMoreButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#00B67A',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
