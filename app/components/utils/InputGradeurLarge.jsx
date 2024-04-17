import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

const InputGradeurLarge = ({ placeholder, grandeur, onChangeText, inputValue}) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                keyboardType="numeric"
                value={inputValue}
                style={styles.input}
                onChangeText={onChangeText}
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
        width: "90%",
        backgroundColor: "#fff",
    },
    input: {
        flex: 4, // occupe 75% de l'espace
        height: 60,
        borderColor: 'gray',
        paddingHorizontal: 10,
        paddingStart: 20,
        borderRadius: 10,
        backgroundColor: "#fff",
    },
    unit: {
        flex: 1, // occupe 25% de l'espace
        textAlign: 'center',
        color: '#00000099',
        borderColor: '#ccc',
        backgroundColor: "#fff",
        padding: 5,
        fontSize: 16,
        fontWeight: "700",
    },
});

export default InputGradeurLarge;
