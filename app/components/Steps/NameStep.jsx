import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const NameStep = ({ nextStep }) => {
  return (
    <View>
      <Text>Quel est votre nom ?</Text>
      <TextInput placeholder="Nom" />
      <Button title="Suivant" onPress={nextStep} />
    </View>
  );
};

export default NameStep;
