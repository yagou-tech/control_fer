import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './utils/CustomButton';

const VideoScreen = () => {
  const videoRef = useRef(null);
  const navigation = useNavigation();
  
  const handleStart = () => {
    if (videoRef.current) {
      videoRef.current.pauseAsync();
    }
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: 'https://wave.video/embed/660d7ae9d829551ce9d07e8c/660d7ae9d829551ce9d07e8a.mp4' }}
        style={styles.video}
        resizeMode="cover"
        shouldPlay
      />
      <View style={styles.buttonContainer}> 
        <CustomButton
          title="DÉMARRER"
          onPress={handleStart}
          buttonStyle={{ backgroundColor: '#E31D1A' }}
          textStyle={{ color: 'white' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    width: "100%",
  },
});

export default VideoScreen;