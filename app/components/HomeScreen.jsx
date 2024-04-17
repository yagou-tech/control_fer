import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomButton from './utils/CustomButton';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import LeftMenu from './LeftMenu'; // Assurez-vous que le chemin d'accès est correct
import CustomInput from './utils/CustomInput';
import InputGradeur from './utils/InputGradeur';
import HistoriqueScreen from './HistoriqueScreen';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  // Fonction de gestion du bouton de validation
  const handleValidation = () => {
    navigation.navigate('LenghtScreen');
  };

  return (
    <View style={styles.container}>
      {/* Partie supérieure */}
      <View style={styles.topContainer}>
        <ImageBackground source={require('../assets/background-image.png')} style={styles.backgroundImage}>
          <View style={styles.topContent}>
            <View style={styles.menuIcon}>
              {/* Menu déroulant */}
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image source={require('../assets/Icons-Menu-Burger-white.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.profile}>
              {/* Photo de profil */}
              <TouchableOpacity style={styles.profileIcon}>
                <Image source={require('../assets/avatar.png')} style={styles.profileImage} />
              </TouchableOpacity>
              {/* Icone de notification */}
              <TouchableOpacity style={styles.notificationIcon}>
                <Ionicons name="notifications-outline" size={24} color="white" />
                {/* Cercle rouge */}
                <View style={styles.notificationCircle} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.playContainer}>
            <Ionicons name="play-circle" size={24} color="white" />
            <Text style={styles.playTitle}>Vérifiez la qualité du fer</Text>
          </View>
          {/* Formulaire de vérification */}
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <View style={styles.firstInput}>
                <View style={styles.inputTitle}>
                  <MaterialCommunityIcons name="human-male-height" size={24} color="#00000060" />
                  <Text style={styles.grandeur1}>Taille</Text>
                </View>
                <View style={styles.inputItem}>
                  <InputGradeur placeholder="Longueur fer" grandeur="m" />
                </View>
              </View>
              <View style={styles.secondInput}>
                <View style={styles.inputTitle}>
                  <MaterialCommunityIcons name="weight-gram" size={24} color="#00000060" />
                  <Text style={styles.grandeur1}>Poids</Text>
                </View>
                <View style={styles.inputItem}>
                  <View style={styles.inputItem}>
                    <InputGradeur placeholder="Poids du fer" grandeur="kg" />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                title="VÉRIFIER"
                onPress={handleValidation}
                buttonStyle={{ backgroundColor: '#E31D1A' }}
                textStyle={{ color: 'white' }}
              />
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Partie inférieure */}
      <View style={styles.bottomContainer}>
        <Text style={styles.historyTitle}>Historique</Text>
        <HistoriqueScreen />
        {/* Historique de vérification */}
        <View>
        </View>
      </View>
    </View>
  );
};

const Drawer = createDrawerNavigator();

const MainScreen = () => {
  return (
    <Drawer.Navigator drawerContent={LeftMenu}>
      <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
  backgroundImage: {
    resizeMode: 'cover',
    alignItems: "center",
    height: 322,
    flex: 1,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  profile: {
    flexDirection: "row",
  },
  profileIcon: {
    padding: 10,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E31D1A",
  },
  notificationIcon: {
    padding: 10,
    position: 'relative', // pour positionner le cercle rouge
  },
  notificationCircle: {
    width: 14,
    height: 14,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: "#08BB90",
    borderRadius: 15,
    position: 'absolute', // positionné par rapport à l'icône de notification
    top: 5, // ajustement vers le haut
    right: 10, // ajustement vers la droite
  },
  bottomContainer: {
    flex: 1, // Utilise tout l'espace disponible
    // paddingHorizontal: 20,
    paddingTop: 20,
    paddingStart: 10,
    backgroundColor: "#eff0f0",
    marginTop: 70,
    position: 'relative',
    zIndex: -1,
  },
  playContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  playTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#fff",
    marginStart: 10,
  },
  formContainer: {
    width: 344,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
    paddingTop: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  firstInput: {
    flex: 1,
    marginEnd: 10,
    marginStart: 10,
  },
  secondInput: {
    flex: 1,
  },
  inputTitle: {
    flexDirection: "row",
    marginBottom: 10,
  },
  grandeur1: {
    fontSize: 18,
    fontWeight: "500",
    marginStart: 8,
  },
  inputItem: {
    flexDirection: "row",
    alignItems: "center",
    width: 154,

  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  unit: {
    marginLeft: 5,
    fontSize: 16,
    color: "#00000060",
  },
  // historyContainer: {
  //   flex: 1,
  // },
  historyTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  menuIcon: {
    width: '50%',
    padding: 10,
  },
  profile: {
    width: '50%',
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainScreen;
