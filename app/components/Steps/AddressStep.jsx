import React from 'react';
import { View, Text, Button } from 'react-native';

const AddressStep = ({ nextStep, prevStep }) => {
  return (
    <View>
      <Text>Saisir votre adresse</Text>
      <Button title="Précédent" onPress={prevStep} />
      <Button title="Suivant" onPress={nextStep} />
    </View>
  );
};

export default AddressStep;