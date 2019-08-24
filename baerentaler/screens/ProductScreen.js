import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class ProductScreen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
            </ScrollView>
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
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
