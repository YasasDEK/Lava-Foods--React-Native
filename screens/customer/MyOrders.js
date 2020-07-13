/* eslint-disable no-unused-vars */
import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
  IconButton,
} from 'react-native';
import {getAllFoods} from '../shopowner/FoodApi';
// import {ModalTester} from './cartScreen';
import {ListItem, Divider} from 'react-native-elements';
import {SearchBar} from 'react-native-elements';
import {add} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

// import SwipeUpDown from 'react-native-swipe-up-down';
// import ActionButton from 'react-native-action-button';
// export var orederList = [];
export var count = 0;

class MyOrders extends Component {
  constructor(props, context) {
    super(props, context);
    // ...
  }
  _handlePress() {
    console.log('Pressed!');
  }

  state = {
    detailList: [],
    selectedIndex: 0,
    search: '',
    total: 0,
  };

  updateSearch = search => {
    this.setState({search});
  };

  onFoodAdded = detailList => {
    this.setState(prevState => ({
      detailList: [...prevState.detailList, detailList],
    }));
    this.props.navigation.popToTop();
  };

  onDetailsReceived = detailList => {
    this.setState(prevState => ({
      detailList: (prevState.detailList = detailList),
    }));
    console.log('detail');
    console.log(detailList);
  };

  componentDidMount() {
    getAllFoods(this.onDetailsReceived);
  }

  render() {
    return this.state.detailList.length > 0 ? (
      <SafeAreaView style={styles.container}>
        <Icon.Button
          name="ios-arrow-back"
          size={25}
          backgroundColor="#009387"
          onPress={() => this.props.navigation.navigate('CustomerHomeDrawer')}
        />
        <Text style={styles.emptyTitle2}>MY ORDERS</Text>
        <FlatList
          data={this.state.detailList}
          ItemSeparatorComponent={() => <Divider />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View>
                <ListItem
                  style={styles.list}
                  containerStyle={styles.listItem}
                  title={`Total price: Rs${item.total}/=`}
                  subtitle={item.date}
                  titleStyle={styles.titleStyle}
                  subtitleStyle={styles.subtitleStyle}
                />
              </View>
            );
          }}
        />
      </SafeAreaView>
    ) : (
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.emptyTitle}>No Orders found</Text>
        </View>
      </View>
    );
  }
}

export default MyOrders;

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
    fontSize: 20,
  },
  subtitleStyle: {
    fontSize: 18,
  },
  emptyTitle: {
    fontSize: 32,
    marginBottom: 16,
    marginTop: 300,
  },
  emptySubtitle: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  button: {
    marginLeft: 200,
    marginRight: 20,
    marginBottom: 10,
  },
  button1: {
    // marginLeft: 250,
    // marginRight: 50,
    // marginBottom: 10,
    marginTop: 10,
  },
  price: {
    marginLeft: 250,
    marginRight: 30,
    marginBottom: 10,
  },
  iconbutton: {
    marginTop: 30,
  },
  emptyTitle2: {
    fontSize: 28,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
  },
});
