import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class ExploreScreen extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search} />
        <FlatList
          data={[
            {
              key: '0',
              name: 'Karotten',
              producer: 'Max Knecht, Emmental',
              price: '5BT pro kg',
              imageUrl: 'https://www.gesundheit.de/sites/default/files/styles/crop_content/public/2016-03/karotte.jpg?itok=MrGiGvSb'
            },
            {
              key: '1',
              name: 'Karotten',
              producer: 'Max Knecht, Emmental',
              price: '5BT pro kg',
              imageUrl: 'https://www.gesundheit.de/sites/default/files/styles/crop_content/public/2016-03/karotte.jpg?itok=MrGiGvSb'
            },
            {
              key: '2',
              name: 'Karotten',
              producer: 'Max Knecht, Emmental',
              price: '5BT pro kg',
              imageUrl: 'https://www.gesundheit.de/sites/default/files/styles/crop_content/public/2016-03/karotte.jpg?itok=MrGiGvSb'
            },
            {
              key: '3',
              name: 'Karotten',
              producer: 'Max Knecht, Emmental',
              price: '5BT pro kg',
              imageUrl: 'https://www.gesundheit.de/sites/default/files/styles/crop_content/public/2016-03/karotte.jpg?itok=MrGiGvSb'
            },
            {
              key: '4',
              name: 'Karotten',
              producer: 'Max Knecht, Emmental',
              price: '5BT pro kg',
              imageUrl: 'https://www.gesundheit.de/sites/default/files/styles/crop_content/public/2016-03/karotte.jpg?itok=MrGiGvSb'
            },
            {
              key: '5',
              name: 'Karotten',
              producer: 'Max Knecht, Emmental',
              price: '5BT pro kg',
              imageUrl: 'https://www.gesundheit.de/sites/default/files/styles/crop_content/public/2016-03/karotte.jpg?itok=MrGiGvSb'
            },
            {
              key: '6',
              name: 'Karotten',
              producer: 'Max Knecht, Emmental',
              price: '5BT pro kg',
              imageUrl: 'https://www.gesundheit.de/sites/default/files/styles/crop_content/public/2016-03/karotte.jpg?itok=MrGiGvSb'
            },
          ]} renderItem={({ item }) =>
            <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={{ uri: item.imageUrl }} />
              <Text style={styles.itemName}>{item.name} von {item.producer}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          }
        />
      </View>
    );
  }
}

ExploreScreen.navigationOptions = {
  title: 'Explore',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  searchField: {
    height: 40,
    marginHorizontal: 30,
    borderColor: 'gray',
    borderWidth: 2,
    backgroundColor: '#CC0033',
  },
  item: {
    margin: 10,
    padding: 10,
    fontSize: 18,
    backgroundColor: '#C4CCD3',
  },
  itemImage: {
    width: '100%',
    height: 130,
  },
  itemName: {
    fontSize: 20,
  },
  itemPrice: {
    fontSize: 15,
    color: '#CC0033',
  },
})
