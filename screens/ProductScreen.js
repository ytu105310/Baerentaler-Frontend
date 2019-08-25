import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TextInput, FlatList, Button } from 'react-native';
import Colors from '../constants/Colors';

export default class ProductScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: false,
            everyXthWeek: '2',
            amount: '200',
            productsFromSameProducer: [
                {
                    key: '0',
                    name: 'Am Laden',
                    price: 'Einen Moment...',
                }
            ]
        };
    }

    subscribe = () => {

    }

    componentDidMount() {
        return fetch('http://localhost:3000/products/' + this.props.navigation.getParam('_id'))
            .then((response) => response.json())
            .then((responseJson) => {
                let productsFromSameProducer = [];
                productsFromSameProducer = responseJson;
                for (let i = 0; i < productsFromSameProducer.length; i++) {
                    productsFromSameProducer[i].key = productsFromSameProducer[i]._id;
                }
                setTimeout(() => {
                    this.setState({ productsFromSameProducer: productsFromSameProducer });
                    this.setState({ hasLoaded: true });
                }, 400);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.scrollViewWrapper}>
                <ScrollView>
                    <View>
                        <View style={styles.titleWrapper}>
                            <View style={styles.titleLeft}>
                                <Text style={styles.name}>{navigation.getParam('name')}</Text>
                                <Text style={styles.producer}>{navigation.getParam('producer')}</Text>
                            </View>
                            <View style={styles.titleRight}>
                                <Text style={styles.price}>{navigation.getParam('price')}</Text>
                            </View>
                        </View>
                        <Text style={styles.mapTitle}>Wo befindet sich der Stand?</Text>
                        <Image
                            style={styles.itemImage}
                            source={require('../assets/images/markt/standBrot.png')} />
                    </View>
                    <View style={styles.outerSubscribeWrapper}>
                        <View style={styles.subscribeWrapper}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.lineWrapper}>
                                    <Text style={styles.text}>Jede </Text>
                                    <TextInput
                                        textAlign='center'
                                        style={styles.inputField}
                                        onChangeText={(text) => this.setState({ everyXthWeek: text })}
                                        value={this.state.everyXthWeek} />
                                    <Text style={styles.text}>te Woche</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <View style={styles.lineWrapper}>
                                    <TextInput
                                        textAlign='right'
                                        style={[styles.inputField, { width: 60 }]}
                                        onChangeText={(text) => this.setState({ amount: text })}
                                        value={this.state.amount} />
                                    <Text style={styles.text}>Gramm</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonView}>
                            <Button
                                color={Colors.tintColor}
                                onPress={this.subscribe}
                                title="Abonnieren" />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.similarText}>Weitere Artikel:</Text>
                        <FlatList
                            data={this.state.productsFromSameProducer} renderItem={({ item }) =>
                                <View style={styles.item}>
                                    <Image
                                        style={styles.itemImage}
                                        source={{ uri: item.imageUrl }} />
                                    <Text style={styles.itemName}>{item.name} {item.producer ? 'von' : ''} {item.producer}</Text>
                                    <Text style={styles.itemPrice}>{item.price}</Text>
                                </View>
                            }
                        />
                    </View>
                </ScrollView>
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
        height: 100,
    },
    image: {
        flex: 1,
        width: 100,
        height: 360,
    },
    scrollViewWrapper: {
        marginHorizontal: 20,
        marginTop: 20
    },
    outerSubscribeWrapper: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#C4CCD3',
        marginTop: 20,
        borderRadius: 10,
        height: 130,
    },
    subscribeWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lineWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 5,
    },
    inputField: {
        height: 20,
        width: 20,
        borderColor: 'rgba(84, 91, 104, 0.5)',
        borderWidth: 2,
        borderRadius: 5
    },
    buttonView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleLeft: {
        flex: 3,
        flexDirection: 'column',
    },
    name: {
        fontSize: 30,
    },
    producer: {
        fontSize: 14,
        color: '#545B68',
    },
    titleRight: {
        flex: 1,
    },
    price: {
        fontSize: 18,
        color: Colors.tintColor,
    },
    mapTitle: {
        fontSize: 20,
        marginTop: 20,
    },
    subscribe: {
        marginTop: 20,
        fontSize: 20,
    },
    similarText: {
        marginTop: 20,
        fontSize: 20,
    },
    item: {
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        backgroundColor: '#C4CCD3',
    },
    itemImage: {
        width: '100%',
        height: 160,
        marginTop: 10,
    },
    itemName: {
        fontSize: 20,
    },
    itemPrice: {
        fontSize: 15,
        color: '#CC0033',
    },

});
