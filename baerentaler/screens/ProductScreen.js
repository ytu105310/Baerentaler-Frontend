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

<<<<<<< HEAD
FinanceScreen.navigationOptions = {
    title: 'Product',
    headerTintColor: '#CC0033'
=======
ProductScreen.navigationOptions = {
    title: 'Produkt',
>>>>>>> 0cb23888f2d191bd6b2e5225095181e70d0837ae
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
