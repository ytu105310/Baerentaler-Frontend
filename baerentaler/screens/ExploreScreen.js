import React from 'react';
import { ExpoLinksView } from '@expo/samples';
import axios from 'axios';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ExploreScreen({ navigation }) {
  function getUserAccount() {
    return axios.get('http://bekb-marketplace.herokuapp.com/abos');
  }
  return (
    <View style={styles.container}>
      <View style={styles.search}>
      </View>
      <Text>{getUserAccount}</Text>
      <ScrollView style={styles.info}>
        {/* {getUserAccount.map(r =>  */}
          <View>
            {/* <TouchableOpacity onPress={() => navigation.navigate('InfoStand', {data: r})}> */}
            <TouchableOpacity onPress={() => navigation.navigate('InfoStand')}>
            <Image
              source={require('../assets/images/robot-dev.png')
              }
              style={styles.welcomeImage}
            />
            {/* <Text style={styles.title}>{r}</Text> */}
            <Text>Wo?</Text>
          </TouchableOpacity>
          </View>
         {/* )} */}
      </ScrollView>
    </View>
  );
}

ExploreScreen.navigationOptions = {
  title: 'Endtecken',
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  info: {
    marginBottom: 40,
    paddingBottom: 30
  },
  title: {
    fontSize: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
