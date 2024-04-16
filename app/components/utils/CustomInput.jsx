import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const CustomInput = ({ placeholder, onChangeText, secureTextEntry, icon, iconPosition }) => {
  const [text, setText] = useState('');

  const handleChangeText = newText => {
    setText(newText);
    if (onChangeText) {
      onChangeText(newText);
    }
  };

  return (
    <View style={[styles.container, iconPosition === 'right' && { flexDirection: 'row-reverse' }]}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput
        style={[styles.input, icon && { paddingLeft: iconPosition === 'left' ? 60 : 10 }]}
        placeholder={placeholder}
        onChangeText={handleChangeText}
        value={text}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    flex: 1,
    backgroundColor: "#fff",
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
  },
});

export default CustomInput;
