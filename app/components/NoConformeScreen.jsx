import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NoConformeScreen = () => {
    const navigation = useNavigation();

    const handleButtonClick = () => {
        navigation.navigate('HomeScreen');
    };
    return (
        <View style={styles.container}>
            {/* Grande icône de confirmation verte */}
            <Ionicons name="close-circle" size={150} color="#FA1414" style={styles.icon} />

            {/* Premier paragraphe */}
            <View style={styles.paragraphContainer}>
                <View style={styles.paragraph}>
                    <Text style={styles.title}>Non Conforme</Text>
                    <Text style={styles.description}>La qualité de votre fer n'est pas conforme</Text>
                </View>
            </View>

            {/* Deuxième paragraphe */}
            <View style={styles.paragraphContainer}>
                <View style={styles.paragraph}>
                    <View style={styles.item}>
                        <Text style={styles.diameter}>Diamètre</Text>
                        <Text style={styles.diameterValue}>20mm</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.lenght}>Longueur</Text>
                        <Text>300m</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.weight}>Poids</Text>
                        <Text>300m</Text>
                    </View>
                </View>
            </View>

            {/* Bouton fixé en bas */}
            <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
                <Text style={styles.buttonText}>RETOURNER À L’ACCUEIL</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    icon: {
        marginBottom: 20,
    },
    paragraphContainer: {
        marginTop: 30,
        marginBottom: 50,
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 26,
        fontWeight: "600",
        color: 'rgba(0, 0, 0, 0.7)',
    },
    description: {
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.7)',
    },
    item: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    diameterValue: {
        fontSize: 24,
        fontWeight: "600",
        color: "#E31D1A",
    },
    diameter: {
        paddingEnd: 10,
        fontSize: 12,
    },
    lenght: {
        paddingEnd: 10,
        fontSize: 13,
        fontWeight: "bold",
    },
    weight: {
        paddingEnd: 10,
        fontSize: 13,
        fontWeight: "bold",
    },
    button: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#F1F1F1',
        paddingVertical: 15,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#626060',
        fontSize: 13,
        fontWeight: '800',
    },
});

export default NoConformeScreen;
