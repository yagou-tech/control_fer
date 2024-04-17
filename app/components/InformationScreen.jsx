import React, { useState } from 'react';
import { View, Button, StyleSheet, ProgressBarAndroid } from 'react-native';
import NameStep from './Steps/NameStep';
import AddressStep from './Steps/AddressStep';
import PhoneNumberStep from './Steps/PhoneNumberStep';
import LanguageStep from './Steps/LanguageStep';
import CustomButton from './utils/CustomButton';
import { LinearProgress } from '@rneui/themed';

const InformationScreen = ({ route }) => {
  const initialStep = route.params?.step || 0;
  const [step, setStep] = useState(initialStep);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return <PhoneNumberStep nextStep={nextStep} />;
      case 1:
        return <LanguageStep />;
      default:
        return null;
    }
  };

  const renderButton = () => {
    if (step === 0) {
      return (
        <View style={styles.buttonContainer}>
          <View style={styles.button1}>
            <CustomButton 
              title="Passer"
              // onPress={handleLogin}
              onPress={nextStep}
              buttonStyle={{ backgroundColor: '#D6D6D6' }}
              textStyle={{ color: '#6D6D6D' }} 
            />
          </View>
          <View style={styles.button}>
            <CustomButton 
              title="SUIVANT"
              // onPress={handleLogin}
              onPress={nextStep}
              buttonStyle={{ backgroundColor: '#E31D1A' }}
              textStyle={{ color: 'white' }}
            />
          </View>
        </View>
      );
    } else if (step === 1) {
      return null; // Pas de bouton suivant à l'étape finale
    } else {
      return (
        <View style={styles.button}>
          <CustomButton 
            title="Passer"
            // onPress={handleLogin}
            onPress={nextStep}
            buttonStyle={{ backgroundColor: '#D6D6D6' }}
            textStyle={{ color: 'white' }} 
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <LinearProgress
        style={{ marginVertical: 5 }}
        value={(step + 1) / 2}
        variant="determinate" color="#E31D1A" indeterminate={false} 
        />
      </View>
      <View>
        {renderStepContent()}
          {renderButton()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Alignement vertical en haut
    alignItems: 'center',
    paddingTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    width: "90%",
  },
  button1: {
    width: 160,
  },
  button: {
    width: 160,
    marginEnd: 10,
  },
  progressBar: {
    width: "100%",
    position: "absolute",
    marginTop: -5,
  },
});

export default InformationScreen;