import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButton from '../utils/CustomButton';
import { useNavigation } from '@react-navigation/native';

const LanguageStep = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(''); // Définir la langue par défaut

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const renderLanguage = (language) => {
    const isSelected = selectedLanguage === language;
    return (
      <TouchableOpacity
        key={language}
        style={[styles.language, isSelected && styles.selectedLanguage]}
        onPress={() => handleLanguageSelect(language)}
      >
        <Text style={styles.languageText}>{language}</Text>
      </TouchableOpacity>
    );
  };

  const navigation = useNavigation();
  
  const handleLogin = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate('VideoScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisir une langue</Text>
      <View style={styles.languagesContainer}>
        {renderLanguage('Français')}
        {renderLanguage('Wolof')}
      </View>
      <CustomButton
        title="SUIVANT"
        onPress={handleLogin}
        buttonStyle={{ backgroundColor: '#E31D1A' }}
        textStyle={{ color: 'white' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#565656",
    marginBottom: 30,
  },
  languagesContainer: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  language: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    width: 350,
    height: 60,
    marginBottom: 15,
    borderRadius: 15,
    borderColor: 'gray',
    backgroundColor: "#fff",
  },
  selectedLanguage: {
    borderWidth: 1,
    borderColor: '#E31D1A', // Couleur de la bordure pour la langue sélectionnée
  },
  languageText: {
    fontSize: 16,
  },
});

export default LanguageStep;