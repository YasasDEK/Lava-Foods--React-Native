import React from 'react';
import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SupportScreen = ({navigation}) => {
  return (
    <View>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <Icon.Button
        name="ios-arrow-back"
        size={25}
        backgroundColor="#009387"
        onPress={() => navigation.navigate('HomeDrawer')}
      />
      <Text
        style={{fontSize: 30, marginLeft: 10, marginTop: 30, color: '#009387'}}>
        Supprot page
      </Text>
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>
          Add foods - Add new foods with details
        </Text>
        <Text style={{fontSize: 20}}>All foods - Details about your foods</Text>
        <Text style={{fontSize: 20}}>
          Edit food - Edit the details of your foods
        </Text>
        <Text style={{fontSize: 20}}>Delete foods - Remove your foods</Text>
        <Text style={{fontSize: 20}}>
          Edit profile - Edit the details of your shop
        </Text>
        <Text style={{fontSize: 20}}>Dark mode - Chanege the theme</Text>
      </View>
      <Image
        source={require('../logo.jpg')}
        style={{width: 250, height: 250, marginTop: 120, marginLeft: 75}}
      />
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginTop: 100,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
