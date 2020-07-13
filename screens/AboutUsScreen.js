import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

const AboutUsScreen = () => {
  return (
    <ImageBackground
      source={require('../images/test11.jpg')}
      style={styles.image}
    />
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
