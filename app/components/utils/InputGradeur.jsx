import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

const InputGradeur = ({ placeholder, grandeur }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
      />
      <Text style={styles.unit}>{grandeur}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#A39E9E',
    borderRadius: 10,
  },
  input: {
    flex: 3, // occupe 75% de l'espace
    height: 60,
    borderWidth: 0,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 5, // espace entre l'input et le texte "KG"
    fontSize: 11,
  },
  unit: {
    flex: 1, // occupe 25% de l'espace
    textAlign: 'center',
    color: '#00000060',
    borderColor: '#ccc',
    padding: 5,
    fontSize: 16,
    fontWeight: "700",
  },
});

export default InputGradeur;
