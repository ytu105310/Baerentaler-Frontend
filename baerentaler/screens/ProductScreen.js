import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TextInput, FlatList, Button } from 'react-native';

import MapView from 'react-native-maps'

export default class ProductScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            everyXthWeek: '2',
            amount: '200'
        };
    }

    subscribe = () => {

    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image
                        style={styles.image}
                        source={{ uri: navigation.getParam('imageUrl') }} />
                </View>
                <View style={styles.scrollViewWrapper}>
                    <ScrollView>
                        <View>
                            <Text style={styles.name}>{navigation.getParam('name')}</Text>
                            <Text style={styles.text}>{navigation.getParam('producer')}</Text>
                            <Text style={styles.text}>{navigation.getParam('price')}</Text>
                            <Text style={styles.location}>Location</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.title}>Abonnieren</Text>
                            <View style={styles.subscribeWrapper}>
                                <Text style={styles.text}>Jede </Text>
                                <TextInput
                                    textAlign='center'
                                    style={styles.inputField}
                                    onChangeText={(text) => this.setState({ everyXthWeek: text })}
                                    value={this.state.everyXthWeek} />
                                <Text style={styles.text}>te Woche</Text>
                            </View>
                            <View style={styles.subscribeWrapper}>
                                <TextInput
                                    textAlign='right'
                                    style={[styles.inputField, { width: 60 }]}
                                    onChangeText={(text) => this.setState({ amount: text })}
                                    value={this.state.amount} />
                                <Text style={styles.text}>Gramm</Text>
                            </View>
                        </View>
                            <Button
                                style={styles.abonnieren}
                                onPress={this.subscribe}
                                title="Abonnieren" />
                        <View>
                            <Text style={styles.artikel}>Weitere Artikel:</Text>
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
                                    }
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
                    </ScrollView>
                </View>
            </View>
        );
    }
}

ProductScreen.navigationOptions = {
    title: 'Produkt',
    headerTintColor: '#CC0033',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    imageView: {
        flex: 2,
    },
    image: {
        flex: 1,
    },
    scrollViewWrapper: {
        flex: 4,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20
    },
    subscribeWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputField: {
        height: 20,
        width: 20,
        borderColor: 'rgba(84, 91, 104, 0.2)',
        borderWidth: 1,
        marginRight: 5,
        borderRadius: 5
    },
    name: {
        fontSize: 50,
        marginBottom: 20
    },
    text: {
        fontSize: 20
    },
    info: {
        marginBottom: 15
    },
    title: {
        marginTop: 30,
        fontSize: 35,
        marginBottom: 15
    },
    artikel: {
        fontSize: 30,
        marginTop: 50,
        marginBottom: 10
    },
    location: {
        marginTop: 25,
        fontSize: 30
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

});
