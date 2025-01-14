import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Spacing from '../../../components/Spacing';
import CustomButton from '../../../components/CustomButton';
import { DimensionConstants, width } from '../../../constants/DimensionConstants';
import { useTheme } from '../../../theme/ThemeContext';
import { useTranslation } from 'react-i18next';
import { OnboardingStyles } from './Styles/OnboardingStyles';

const OnboardingScreen = ({ navigation }) => {
    const {theme} = useTheme();
    const {t} = useTranslation();
    const styles = OnboardingStyles(theme);

    const slides = [
    {
      id: '1',
      image: require('../../../assets/images/slide1.png'),
      textTitle: t('Your Safety, Simplified.'),
      textOne: t('In moments of need, SOS ensures you '),
      textTwo: t('can alert your trusted contacts with just'),
      textThree: t('one tap'),
    },
    {
      id: '2',
      image: require('../../../assets/images/slide1.png'),
      textTitle: t('Fast, Simple, Reliable'),
      textOne: t('Press the SOS Button, '),
      textTwo: t('Notify Trusted Contacts,'),
      textThree: t('Get the help you need'),
    },
    {
      id: '3',
      image: require('../../../assets/images/slide1.png'),
      textTitle: t('Personalize Your Safety'),
      textOne: t('Add trusted contacts.',
      textTwo: 'Customize your emergency message to',
      textThree: 'match your needs.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleNext = () => {
    if (currentIndex === slides.length - 1) {
      navigation.replace('WelcomeScreen');
    } else {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Spacing height={DimensionConstants.thirtyTwo} />
      <Image source={item.image} style={styles.image} />
      <View style={styles.slideContent}>
        <Text style={styles.textTitle}>{item.textTitle}</Text>
        <Spacing height={DimensionConstants.sixteen} />
        <Text style={styles.text}>{item.textOne}</Text>
        <Text style={styles.text}>{item.textTwo}</Text>
        <Text style={styles.text}>{item.textThree}</Text>
        <Spacing height={DimensionConstants.twentyTwo} />
        <CustomButton text={t('Next')} onPress={handleNext} />
      </View>
    </View>
  );

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        <View style={styles.pagination}>
          {[0, 1, 2].map((index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate('WelcomeScreen')}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Spacing height={DimensionConstants.twentyFour} />
      {renderPagination()}
      <FlatList
        data={slides}
        ref={flatListRef}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const contentOffsetX = e.nativeEvent.contentOffset.x;
          const index = Math.round(contentOffsetX / width);
          setCurrentIndex(index);
        }}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   slide: {
//     width,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   image: {
//     width: 355,
//     height: 355,
//     resizeMode: 'contain',
//   },
//   slideContent: {
//     width: '100%',
//     paddingHorizontal: DimensionConstants.twentyFour,
//     paddingBottom: DimensionConstants.forty,
//   },
//   text: {
//     fontSize: DimensionConstants.fourteen,
//     fontWeight: '500',
//     textAlign: 'center',
//     lineHeight: DimensionConstants.twentyTwo,
//     color: '#889CA3',
//   },
//   textTitle: {
//     fontSize: DimensionConstants.twentyFour,
//     textAlign: 'center',
//     marginTop: DimensionConstants.twenty,
//     fontWeight: '700',
//     fontFamily: 'Montserrat',
//     color: '#323A51',
//   },
//   paginationContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: DimensionConstants.twenty,
//   },
//   pagination: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   dot: {
//     height: DimensionConstants.six,
//     width: DimensionConstants.six,
//     borderRadius: DimensionConstants.three,
//     backgroundColor: '#D3D3D3',
//     marginHorizontal: DimensionConstants.one,
//   },
//   activeDot: {
//     backgroundColor: '#FE605D',
//     width: DimensionConstants.eighteen,
//     height: DimensionConstants.six,
//   },
//   skipButton: {
//     flex: 1,
//     alignItems: 'flex-end',
//   },
//   skipText: {
//     color: '#889CA3',
//     fontWeight: '500',
//   },
// });

export default OnboardingScreen;
