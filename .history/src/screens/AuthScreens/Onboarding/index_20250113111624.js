import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  const slides = [
    {
      id: '1',
      image: require('./assets/slide1.png'), // replace with your image path
      text: 'Welcome to our app! Discover new possibilities.',
    },
    {
      id: '2',
      image: require('./assets/slide2.png'), // replace with your image path
      text: 'Stay connected with the world around you.',
    },
    {
      id: '3',
      image: require('./assets/slide3.png'), // replace with your image path
      text: 'Manage your tasks efficiently and easily.',
    },
    {
      id: '4',
      image: require('./assets/slide4.png'), // replace with your image path
      text: 'Let’s get started with your journey!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex === slides.length - 1) {
      navigation.replace('MainScreen'); // Replace 'MainScreen' with your main app screen
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>{currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={slides}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={(e) => {
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
    paddingTop: 100,
  },
  image: {
    width: 250,
    height: 250,
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
