import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CustomInput from '../utils/CustomInput';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../utils/CustomButton';
import { FontAwesome } from '@expo/vector-icons';

const PhoneNumberStep = ({ nextStep, prevStep }) => {
  return (
    <View>
      <Text style={styles.title}>Quel est votre N° de téléphone ?</Text>
      <CustomInput placeholder="Ajouter votre numéro" icon={<FontAwesome name="microphone" size={24} color="black" />} iconPosition="right" />
      
      {/* <Button title="Précédent" onPress={prevStep} />
      <Button title="Suivant" onPress={nextStep} /> */}
    </View>
  );
};

const styles = StyleSheet.create ({
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 20,
  },
});

export default PhoneNumberStep;