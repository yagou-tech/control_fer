import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HistoriqueCard = ({ date, image, quantity, color }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View>
        <View style={styles.cardContent}>
          <View style={styles.cardItem1}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.authorContent}>
              <View style={styles.authorHead}>
                <Text style={styles.authorA}>À</Text>
                <Text style={styles.quantity}>{quantity}</Text> 
              </View>
              <Text style={styles.date}>{date}</Text>
            </View>
          </View>
          <View style={styles.cardItem2}>
            <View style={styles.cardValid}>
              <Ionicons name="shield-checkmark" size={30} color={color} />
            </View>
          </View>
        </View>
      </View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    height: 60,
    width: "90%",
    padding: 10,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 100/2,
    marginLeft: 10, // Pour décaler l'image vers la droite
  },
  cardContent: {
    flexDirection: 'row',
  },
  cardItem1: {
    flexDirection: "row"
  },
  cardItem2: {
    flexDirection: 'row',
    marginTop: 0, // Ajoutez un espace entre l'auteur et la date
    justifyContent: "flex-end",
    right: 0,
    marginStart: 130,
  },
  authorContent: {
    marginLeft: 10,
    
  },
  authorHead: {
    flexDirection: "row",
  },
  authorA: {
    fontSize: 12,
    color: "#0000005b",
    paddingRight: 8,
  },
  quantity: {
    fontSize: 12,
  },
  cardValid: {
    float: "right",
  },
  date: {
    fontSize: 10,
    color: '#0000005b',
  },
});

export default HistoriqueCard;
