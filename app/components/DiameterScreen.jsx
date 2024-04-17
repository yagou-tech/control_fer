import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './utils/CustomButton';
import InputGradeurLarge from './utils/InputGradeurLarge';

const DiameterScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [showButton, setShowButton] = useState(false);
  const navigation = useNavigation();

  const handleInputChange = (text) => {
    setInputValue(text);
    setShowButton(text !== '');
  };

  const handleButtonClick = () => {
    navigation.navigate('ConformeScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/longueurFer.gif')}
        style={styles.gif}
      />
      <Text style={styles.title}>Diamètre du fer</Text>
      <InputGradeurLarge placeholder="Diamètre du fer" grandeur="cm" onChangeText={handleInputChange} value={inputValue} />
      {showButton && (
        <View style={styles.buttonContainer}>
          <CustomButton
            title="VERIFIER"
            onPress={handleButtonClick}
            buttonStyle={{ backgroundColor: '#E31D1A' }}
            textStyle={{ color: 'white' }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    width: 331,
    height: 331,
    marginBottom: 20,
  },
  title: {
    width: '90%',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "90%",
    marginTop: 20,
  },
});

export default DiameterScreen;