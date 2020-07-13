/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
  Text,
  Avatar,
  View,
  ImageBackground,
} from 'react-native';
import {Title, Caption, IconButton} from 'react-native-paper';
import {getShop} from './FoodApi';
import {ListItem, Divider} from 'react-native-elements';

class ProfileScreen extends Component {
  state = {
    shopList: [],
    selectedIndex: 0,
  };

  onshopsReceived = shopList => {
    this.setState(prevState => ({
      shopList: (prevState.shopList = shopList),
    }));
  };

  componentDidMount() {
    getShop(this.onshopsReceived);
  }

  render() {
    return this.state.shopList.length > 0 ? (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../../images/profile.jpg')}
          style={styles.image}>
          <FlatList
            data={this.state.shopList}
            ItemSeparatorComponent={() => (
              <Divider style={{backgroundColor: 'black'}} />
            )}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <View style={styles.userInfoSectiom}>
                  <View
                    style={{
                      // marginLeft: 10,
                      flexDirection: 'row',
                      // marginTop: 25,
                    }}>
                    <ListItem
                      leftAvatar={{
                        size: 100,
                        // marginLeft: 10,
                        marginTop: 10,
                        rounded: true,
                        source: {uri: item.imageuri},
                      }}
                    />
                    <View style={{marginLeft: 15, flexDirection: 'column'}}>
                      <Title style={styles.title}>{item.shopname}</Title>
                      <Caption style={styles.caption}>{`@${
                        item.shopname
                      }`}</Caption>
                      <Caption style={styles.caption}>User type : Shop</Caption>
                    </View>
                    <View style={styles.row1}>
                      <IconButton
                        style={styles.iconbutton}
                        icon="account-edit"
                        color="#009387"
                        size={40}
                        onPress={() =>
                          this.props.navigation.navigate('EditProfileScreen', {
                            shopemail: item.shopemail,
                          })
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.title2}>Owner</Text>
                    <Caption style={styles.caption2}>{item.ownername}</Caption>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.title2}>Mobile</Text>
                    <Caption style={styles.caption2}>{item.shopmobile}</Caption>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.title2}>Email</Text>
                    <Caption style={styles.caption2}>{item.shopemail}</Caption>
                  </View>
                </View>
              );
            }}
          />
        </ImageBackground>
      </SafeAreaView>
    ) : (
      <View style={styles.textContainer}>
        <Text style={styles.emptySubtitle}>please wait</Text>
      </View>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    marginTop: 8,
    marginBottom: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 30,
  },
  subtitleStyle: {
    fontSize: 18,
  },
  emptyTitle: {
    fontSize: 32,
    marginBottom: 16,
  },
  emptySubtitle: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSectiom: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 40,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 20,
    marginLeft: 30,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  caption2: {
    fontSize: 20,
    marginLeft: 50,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row1: {
    marginTop: 20,
    flexDirection: 'row',
    // marginLeft: 250,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  Paragraph: {
    marginTop: 3,
    fontWeight: 'bold',
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  Preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  data: {
    flex: 4,
    width: '90%',
    marginTop: 30,
  },
  iconbutton: {
    marginTop: 30,
    marginLeft: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
