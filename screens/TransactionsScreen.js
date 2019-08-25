import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

export default class TransactionsScreen extends React.Component {

    state = {
        transactions: [
            {
                title: 'August', data: [{
                    name: 'Karotten',
                    producer: 'Max Mustermann',
                    balanceDifference: -20,
                    date: '02.08.2019',
                }, {
                    name: 'Karotten',
                    producer: 'Max Mustermann',
                    balanceDifference: -20,
                    date: '02.08.2019',
                }, {
                    name: 'Karotten',
                    producer: 'Max Mustermann',
                    balanceDifference: -20,
                    date: '02.08.2019',
                }]
            },
            {
                title: 'Juli', data: [{
                    name: 'Karotten',
                    producer: 'Max Mustermann',
                    balanceDifference: -20,
                    date: '02.08.2019',
                }, {
                    name: 'Karotten',
                    producer: 'Max Mustermann',
                    balanceDifference: -20,
                    date: '02.08.2019',
                }, {
                    name: 'Karotten',
                    producer: 'Max Mustermann',
                    balanceDifference: -20,
                    date: '02.08.2019',
                }]
            },
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={this.state.transactions}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.itemContainer}>
                                <View style={styles.leftSide}>
                                    <Text style={styles.title}>{item.name} von {item.producer}</Text>
                                    <Text style={styles.date}>{item.date}</Text>
                                </View>
                                <View style={styles.rightSide}>
                                    <Text style={styles.balanceDifference}>{item.balanceDifference}</Text>
                                </View>
                            </View>
                        );
                    }}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

TransactionsScreen.navigationOptions = {
    title: 'Letzte Transaktionen',
    headerTintColor: '#CC0033'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    itemContainer: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
    },
    leftSide: {
        flex: 8,
        flexDirection: 'column',
    },
    rightSide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 17,
    },
    date: {
        color: Colors.tintColor,
    },
    balanceDifference: {
        fontWeight: 'bold',
    },
})