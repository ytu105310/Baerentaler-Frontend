import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TextInput, Button } from 'react-native';

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
                        <View style={styles.info}>
                            <Text style={styles.name}>{navigation.getParam('name')}</Text>
                            <Text style={styles.text}>{navigation.getParam('producer')}</Text>
                            <Text style={styles.text}>{navigation.getParam('price')}</Text>
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
        marginBottom: 50
    }
});
