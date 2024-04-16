import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CustomInput from './utils/CustomInput';
import CustomButton from './utils/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {

  const navigation = useNavigation();
  
  const handleLogin = () => {
    // Mettez ici votre logique de connexion
    navigation.navigate('InformationScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SE CONNECTER</Text>
      <CustomInput style={styles.email} placeholder="Nom d'utilisateur" icon={<Ionicons name="mail-outline" size={24} color="black" />} iconPosition="left" />
      <CustomInput style={styles.password} placeholder="Mot de passe" secureTextEntry={true} icon={<MaterialIcons name="lock-open" size={24} color="black" />} iconPosition="left" />
      
      <View style={styles.buttonContainer}>
        <CustomButton
          title="CONNEXION"
          onPress={handleLogin}
          buttonStyle={{ backgroundColor: '#E31D1A' }}
          textStyle={{ color: 'white' }}
        />
      </View>
      <View style={styles.forgetContainer}>
        <Text style={styles.forgetText}>Mot de passe oublié</Text>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.newText}>Nouveau ?</Text>
        <Text style={styles.createText}>Créer un compte</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    marginTop: 100,
  },
  title: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: "800",
    marginBottom: 70,
  },
  buttonContainer: {
    marginTop: 20,
    
  },
  forgetContainer: {
    marginTop: 70,
    alignItems: "center",
  },
  forgetText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#E31D1A",
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150, // Place les éléments en bas de l'écran
  },
  newText: {
    marginRight: 5, // Ajoute un espace entre les deux textes
  },
  createText: {
    fontWeight: 'bold', 
  },
})

export default SignInScreen;