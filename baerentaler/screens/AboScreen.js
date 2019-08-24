import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

export default class AboScreen extends React.Component {

  removeSubscription = () => {

  }

  render() {
    return (
      <View>
        <FlatList
          data={[
            {
              key: '0',
              name: 'Karotten',
              producer: 'Max Knecht, Emmental',
              price: '5BT pro kg',
              everyXthWeek: '2',
              amount: '200g',
              imageUrl: 'https://www.gesundheit.de/sites/default/files/styles/crop_content/public/2016-03/karotte.jpg?itok=MrGiGvSb'
            },
            {
              key: '1',
              name: 'Karotten',
              producer: 'Max Knecht, Emmental',
              price: '5BT pro kg',
              everyXthWeek: '2',
              amount: '200g',
              imageUrl: 'https://www.gesundheit.de/sites/default/files/styles/crop_content/public/2016-03/karotte.jpg?itok=MrGiGvSb'
            },
            {
              key: '2',
              name: 'Karotten',
              producer: 'Max Knecht, Emmental',
              price: '5BT pro kg',
              everyXthWeek: '2',
              amount: '200g',
              imageUrl: 'https://www.gesundheit.de/sites/default/files/styles/crop_content/public/2016-03/karotte.jpg?itok=MrGiGvSb'
            },
            {
              key: '3',
              name: 'Karotten',
              producer: 'Max Knecht, Emmental',
              price: '5BT pro kg',
              everyXthWeek: '2',
              amount: '200g',
              imageUrl: 'https://www.gesundheit.de/sites/default/files/styles/crop_content/public/2016-03/karotte.jpg?itok=MrGiGvSb'
            },
            {
              key: '4',
              name: 'Karotten',
              producer: 'Max Knecht, Emmental',
              price: '5BT pro kg',
              everyXthWeek: '2',
              amount: '200g',
              imageUrl: 'https://www.gesundheit.de/sites/default/files/styles/crop_content/public/2016-03/karotte.jpg?itok=MrGiGvSb'
            },
            {
              key: '5',
              name: 'Karotten',
              producer: 'Max Knecht, Emmental',
              price: '5BT pro kg',
              everyXthWeek: '2',
              amount: '200g',
              imageUrl: 'https://www.gesundheit.de/sites/default/files/styles/crop_content/public/2016-03/karotte.jpg?itok=MrGiGvSb'
            },
            {
              key: '6',
              name: 'Karotten',
              producer: 'Max Knecht, Emmental',
              price: '5BT pro kg',
              everyXthWeek: '2',
              amount: '200g',
              imageUrl: 'https://www.gesundheit.de/sites/default/files/styles/crop_content/public/2016-03/karotte.jpg?itok=MrGiGvSb'
            },
          ]} renderItem={({ item }) =>
            <View style={styles.item}>
              <View>
                <Text>Jede {item.everyXthWeek}te Woche {item.amount}</Text>
                <Text style={styles.itemName}>{item.name} von {item.producer}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={this.removeSubscription}>
                <Image style={styles.icon} source={require('../assets/images/minus.png')} />
              </TouchableOpacity>
            </View>
          }
        />
      </View>
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
    fontSize: 18,
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
    fontSize: 20,
  },
  itemPrice: {
    fontSize: 15,
    color: '#CC0033',
  },
})
