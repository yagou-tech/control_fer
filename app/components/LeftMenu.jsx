import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { FontAwesome, Entypo, Fontisto } from '@expo/vector-icons';

const LeftMenu = () => {
  return (
    <View style={styles.menuContainer}>
      {/* Contenu 1 */}
      <View style={styles.menuItem1}>
        <Image source={require('../assets/Icons-Menu-Burger-red.png')} />
        <Text style={styles.menuText1}>Menu</Text>
      </View>
      {/* Contenu 2 */}
      <View style={styles.menuItem2}>
        <View style={styles.item}>
          <FontAwesome name="users" size={24} color="#E31D1A" />
          <Text style={styles.itemText}>Invite Friends</Text>
        </View>
        <View style={styles.item}>
          <Entypo name="share" size={24} color="#E31D1A" />
          <Text style={styles.itemText}>Partager</Text>
        </View>
        <View style={styles.item}>
          <Fontisto name="world" size={24} color="#E31D1A" />
          <Text style={styles.itemText}>Nous contacter</Text>
        </View>
      </View>
      {/* Contenu 3 */}
      <View style={styles.menuItem3}>
        <Text style={styles.menuText3}>Déconnexion</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingStart: 20,
  },
  menuItem1:{
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 30,
  },
  menuItem2: {
    marginTop: 20,
  },
  item: {
    flexDirection: "row",
    marginBottom: 30,
  },
  itemText: {
    paddingStart: 20,
    fontSize: 14,
    fontWeight: "400",
    color: "#464646",
  },
  menuItem3: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  menuText1: {
    fontSize: 14,
    color: "#E31D1A",
    fontWeight: "400",
    paddingStart: 20,
  },
  menuText3: {
    fontSize: 16,
    fontWeight: "600",
    color: "#E31D1A",
  },
});

export default LeftMenu;