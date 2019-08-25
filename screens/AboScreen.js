import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

export default class AboScreen extends React.Component {

  state = {
    abos: [{
      key: '0',
      name: 'Laden',
      price: 'Bitte warten...',
    }]
  }

  removeSubscription = () => {

  }

  componentDidMount() {
    return fetch('http://localhost:3000/abos')
      .then((response) => response.json())
      .then((responseJson) => {
        let abos = [];
        abos = responseJson;
        for (let i = 0; i < abos.length; i++) {
          abos[i].key = abos[i]._id;
        }
        setTimeout(() => {
          this.setState({ abos: abos });
        }, 400);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <FlatList
        data={this.state.abos} renderItem={({ item }) =>
          <View style={styles.item}>
            <View>
              {item.everyXthWeek &&
                <Text>Jede {item.everyXthWeek}te Woche {item.amount}</Text>
              }
              <Text style={styles.itemName}>{item.name} {item.producer ? 'von' : ''} {item.producer}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={this.removeSubscription}>
              <Image style={styles.icon} source={require('../assets/images/minus.png')} />
            </TouchableOpacity>
          </View>
        }
      />
    );
  }
}

AboScreen.navigationOptions = {
  title: 'Meine Abos',
  headerTintColor: '#CC0033',
};

const styles = StyleSheet.create({
  item: {
    marginTop: 15,
    marginHorizontal: 15,
    padding: 10,
    fontSize: 14,
    backgroundColor: '#C4CCD3',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    padding: 10,
    alignSelf: "center",
  },
  icon: {
    width: 30,
    height: 6,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 15,
    color: '#CC0033',
  },
})
