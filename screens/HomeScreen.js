import React from 'react';
import {StyleSheet, ImageBackground, Button, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../images/test.jpg')}
      style={styles.image}>
      <View style={styles.button}>
        <Button
          color="#009387"
          title="Add new foods"
          onPress={() => {
            navigation.navigate('Add Food');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

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
  button: {
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
  },
});
