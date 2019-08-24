import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from 'axios';

export default function AboScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text>Test123</Text>
      <ScrollView style={styles.info}>
        {data.map(r => 
          <View>
            <Image
              source={require('../assets/images/robot-dev.png')
              }
              style={styles.welcomeImage}
            />
            <Text style={styles.title}>Titel der Nahrung oder des Verkäufers</Text>
            <Text>Wo?</Text>
            <Text>Wie viel?</Text>
            <Text>Wann?</Text>
            {/* <Button  onPress={deleteAbo(r.index)} title="Abo löschen" /> */}
          </View>
        )}
      </ScrollView>
    </ScrollView>
  );
}

AboScreen.navigationOptions = {
  title: 'Abos',
};

function deleteAbo(index){
  axios.delete(url, { data: { foo: "bar" } });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
