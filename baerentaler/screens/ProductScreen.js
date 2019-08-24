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
                        <Text>{navigation.getParam('name')}</Text>
                        <Text>{navigation.getParam('producer')}</Text>
                        <Text>{navigation.getParam('price')}</Text>
                        <View style={styles.subscribeWrapper}>
                            <Text>Jede </Text>
                            <TextInput
                                textAlign='center'
                                style={styles.inputField}
                                onChangeText={(text) => this.setState({ everyXthWeek: text })}
                                value={this.state.everyXthWeek} />
                            <Text>te Woche</Text>
                        </View>
                        <View style={styles.subscribeWrapper}>
                            <TextInput
                                textAlign='right'
                                style={[styles.inputField, { width: 60 }]}
                                onChangeText={(text) => this.setState({ amount: text })}
                                value={this.state.amount} />
                            <Text>Gramm</Text>
                        </View>
                        <Button
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
    },
    subscribeWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputField: {
        height: 30,
        width: 20,
        borderColor: 'gray',
        borderWidth: 2,
    }
});
