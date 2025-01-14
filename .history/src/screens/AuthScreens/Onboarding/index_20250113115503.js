import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
import CustomButton from '../../../components/CustomButton';
import {DimensionConstants} from '../../../constants/DimensionConstants';
const OnboardingScreen = ({navigation}) => {
  const slides = [
    {
      id: '1',
      image: require('../../../assets/images/slide1.png'),
      textTitle: 'Your Safety, Simplified.', // replace with your image path
      text: 'In moments of need, SOS ensures you can alert your trusted contacts with just one tap.',
    },
    {
      id: '2',
      image: require('../../../assets/images/slide1.png'), // replace with your image path
      textTitle: 'Fast, Simple, Reliable', // replace with your image path

      text: 'Stay connected with the world around you.',
    },
    {
      id: '3',
      image: require('../../../assets/images/slide1.png'), // replace with your image path
      textTitle: 'Personalize Your Safety', // replace with your image path

      text: 'Manage your tasks efficiently and easily.',
    },
    {
      id: '4',
      image: require('../../../assets/images/slide2.png'), // replace with your image path
      textTitle: 'Your Safety, Simplified.', // replace with your image path

      text: "Familiarize yourself with the SOS button. Practice in a safe space to ensure you're ready anytime.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex === slides.length - 1) {
      navigation.replace('LoginScreen'); // Replace 'MainScreen' with your main app screen
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
      <CustomButton text={'Next'} onPress={handleNext} />
    </View>
  );

  return (
    <FlatList
      data={slides}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const index = Math.floor(contentOffsetX / width);
        setCurrentIndex(index);
      }}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: DimensionConstants.twentyFour,
  },
  image: {
    width: 355,
    height: 355,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default OnboardingScreen;
