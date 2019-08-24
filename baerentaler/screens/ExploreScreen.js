import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
      <View>
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
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Product')}>
                <Image
                  style={styles.itemImage}
                  source={{ uri: item.imageUrl }} />
                <Text style={styles.itemName}>{item.name} von {item.producer}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </TouchableOpacity>
            </View>
          }
        />
      </View>
    );
  }
}

ExploreScreen.navigationOptions = {
  title: 'Entdecken',
  headerTintColor: '#CC0033'
};

const styles = StyleSheet.create({
  searchField: {
    height: 40,
    marginHorizontal: 30,
    borderColor: 'gray',
    borderWidth: 2,
    backgroundColor: '#CC0033',
  },
  item: {
    marginTop: 15,
    marginHorizontal: 15,
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
