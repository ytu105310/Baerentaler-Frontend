import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default class ExploreScreen extends React.Component {
  state = {
    hasLoaded: false,
    search: '',
    products: [
      {
        key: '0',
        name: 'Am Laden',
        price: 'Einen Moment...',
      }
    ]
  };

  updateSearch = search => {
    this.setState({ search });
  };

  goToProduct = (item) => {
    if (this.state.hasLoaded) {
      this.props.navigation.navigate('Product', item);
    }
  }

  componentDidMount() {
    return fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((responseJson) => {
        let products = [];
        products = responseJson;
        for (let i = 0; i < products.length; i++) {
          products[i].key = products[i]._id;
        }
        setTimeout(() => {
          this.setState({ products: products });
          this.setState({ hasLoaded: true });
        }, 400);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <ScrollView>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={this.state.search} />
        <FlatList
          data={this.state.products} renderItem={({ item }) =>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.goToProduct(item)}>
                <Image
                  style={styles.itemImage}
                  source={{ uri: item.imageUrl }} />
                <Text style={styles.itemName}>{item.name} {item.producer ? 'von' : ''} {item.producer}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </TouchableOpacity>
            </View>
          }
        />
      </ScrollView>
    );
  }
}

ExploreScreen.navigationOptions = {
  title: 'Entdecken',
  headerTintColor: '#CC0033'
};

const styles = StyleSheet.create({
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
