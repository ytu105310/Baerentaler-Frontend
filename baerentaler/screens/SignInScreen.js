import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Button,
  TextInput,
  Image,
} from 'react-native';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View>
        <ScrollView>
        <Image
          style={styles.coin}
          source={{ uri: 'data:image/png;base64,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' }} />
        <View style={styles.inputArea}>
          <Text style={styles.text}>Benutzername:</Text>
          <TextInput
            style={styles.textField}
            onChangeText={(text) => this.setState({ text })} />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.text}>Passwort:</Text>
          <TextInput
            style={styles.textField}
            onChangeText={(text) => this.setState({ text })} />
        </View>
        <View style={styles.button}>
          <Button title='Sign in!' onPress={this._signInAsync} />
        </View>
        </ScrollView>
      </View>
    );
  }

  _signInAsync = async () => {
    //await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  coin: {
    width: 140,
    height: 140,
    margin: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputArea: {
    marginHorizontal: 50,
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  textField: {
    fontSize: 18,
    height: 50,
    borderColor: 'gray',
    borderWidth: 2,
    backgroundColor: '#CC0033',
  },
  button: {
    marginTop: 30,
  }
});
