import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Spacing from '../../../components/Spacing';
import CustomButton from '../../../components/CustomButton';
import {DimensionConstants, width} from '../../../constants/DimensionConstants';

const OnboardingScreen = ({navigation}) => {
  const slides = [
    {
      id: '1',
      image: require('../../../assets/images/slide1.png'),
      textTitle: 'Your Safety, Simplified.',
      textOne: 'In moments of need, SOS ensures you ',
      textTwo: 'can alert your trusted contacts with just',
      textThree: 'one tap',
    },
    {
      id: '2',
      image: require('../../../assets/images/slide1.png'),
      textTitle: 'Fast, Simple, Reliable',
      textOne: 'Press the SOS Button, ',
      textTwo: 'Notify Trusted Contacts,',
      textThree: 'Get the help you need',
    },
    {
      id: '3',
      image: require('../../../assets/images/slide1.png'),
      textTitle: 'Personalize Your Safety',
      textOne: 'Add trusted contacts.',
      textTwo: 'Customize your emergency message to',
      textThree: 'match your needs.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex === slides.length - 1) {
      navigation.replace('LoginScreen');
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <Spacing height={DimensionConstants.thirtyTwo} />
      <Image source={item.image} style={styles.image} />
      <View
        style={{
          width: '100%',
          paddingHorizontal: DimensionConstants.twentyFour,
          paddingBottom: 40,
        }}>
        <Text style={styles.textTitle}>{item.textTitle}</Text>
        <Spacing height={DimensionConstants.sixteen} />
        <Text style={styles.text}>{item.textOne}</Text>
        <Text style={styles.text}>{item.textTwo}</Text>
        <Text style={styles.text}>{item.textThree}</Text>
        <Spacing height={DimensionConstants.twentyTwo} />
        <CustomButton text={'Next'} onPress={handleNext} />
      </View>
    </View>
  );

  const renderPagination = () => {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.pagination}>
              {[0, 1, 2].map(index => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    currentIndex === index && styles.activeDot,
                  ]}
                />
              ))}
            </View>
          </View>

          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity>
              <Text style = {{color:'#889CA3'}}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
  };

  return (
    <View style={styles.container}>
      <Spacing height={DimensionConstants.twentyFour} />
      {renderPagination()}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 355,
    height: 355,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#889CA3',
  },
  textTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '700',
    color: '#323A51',
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
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 5,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 1,
  },
  activeDot: {
    backgroundColor: '#FE605D',
    width: 18,
    height: 6,
  },
});

export default OnboardingScreen;
