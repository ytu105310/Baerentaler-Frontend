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
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
