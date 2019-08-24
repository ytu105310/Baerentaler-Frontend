import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        fontSize="20"
        style={styles.searchField}
        onChangeText={(text) => this.setState({ text })} />
      <FlatList
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
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
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
