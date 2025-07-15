import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from '../../styles/theme';
import globalStyles from '../../styles/globalStyles';
import SearchBox from '../../components/SearchBox';

const popularServices = [
  { id: '1', title: 'Dashboard & Co...', image: require('../../../assets/images/exteriorservice.png') },
  { id: '2', title: 'Roof / Headliner...', image: require('../../../assets/images/exteriorservice.png') },
  { id: '3', title: 'Door Pad & Panel...', image: require('../../../assets/images/exteriorservice.png') },
  { id: '4', title: 'Seat Vacuuming...', image: require('../../../assets/images/exteriorservice.png') },
];

const allServices = [
  { title: 'Steering & Gear Knob Sanitization', image: require('../../../assets/images/exteriorservice.png') },
  { title: 'AC Vent Sanitization', image: require('../../../assets/images/exteriorservice.png') },
  { title: 'Leather/ Fabric Seat Polishing', image: require('../../../assets/images/exteriorservice.png') },
  { title: 'Mat Washing & Floor Vacuuming', image: require('../../../assets/images/exteriorservice.png') },
  { title: 'Window Glass Cleaning', image: require('../../../assets/images/exteriorservice.png') },
  { title: 'Interior Perfume Spray', image: require('../../../assets/images/exteriorservice.png') },
];

const InteriorService = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
       
       <SearchBox/>
      </View>

      <View style={styles.section}>
        <Text style={[globalStyles.mb3,globalStyles.f16Bold,globalStyles.primary]}>Our Popular Services</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={popularServices}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.popularItem}>
              <Image source={item.image} style={styles.popularImage} />
              <Text style={[globalStyles.f10Bold,styles.popularText]}>{item.title}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.bannerContainer}>
        <Image
          source={require('../../../assets/images/exteriorservice.png') }
          style={styles.bannerImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.section}>
        <Text style={[globalStyles.mb3,globalStyles.f16Bold,globalStyles.primary]}>All Services</Text>
        <View style={styles.grid}>
          {allServices.map((service, index) => (
            <View style={styles.gridItem} key={index}>
                  <ImageBackground
                          source={service.image}
                          style={[
                            styles.ctaContainer,
                            globalStyles.radius,
                          ]}
                          resizeMode="cover"
                        >

              <Text style={[globalStyles.p2,globalStyles.textWhite,globalStyles.f12Bold]}>{service.title}</Text>
                        </ImageBackground>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
   ctaContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    minHeight: 70,
  },
  header: {
    height: 200,
    backgroundColor: color.primary,
    justifyContent: 'flex-end',
    padding: 10,
  },
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  searchBox: {
    backgroundColor: color.white,
    borderRadius: 10,
    padding: 12,
    paddingLeft: 40,
    color:color.black
  },
  section: {
    padding: 20,
  },

  popularItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  popularImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  popularText: {
    marginTop: 5,
    width: 70,
    textAlign: 'center',
  },
  bannerContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 150,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gridImage: {
    width: '100%',
    height: 100,
  },

});

export default InteriorService;
