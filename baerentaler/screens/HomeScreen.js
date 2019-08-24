import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { EventScreen } from '../screens/EventScreen';
import { StandMonthScreen } from '../screens/StandMonthScreen';
import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.contentContainer}>
        <View style={styles.info}>
          <TouchableOpacity onPress={goToStand} style={styles.helpLink}>
            <Image
              source={require('../assets/images/robot-dev.png')
              }
              style={styles.welcomeImage}
            />
            <Text style={styles.headliner}>
              Stand des Monats
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <TouchableOpacity onPress={goToEvent} style={styles.helpLink}>
            <Image
              source={require('../assets/images/robot-dev.png')
              }
              style={styles.welcomeImage}
            />
            <Text style={styles.headliner}>
              Nächstes Event
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

function goToStand() {
  this.props.navigation.navigate('EventScreen');
}

function goToEvent() {
  this.props.navigation.navigate('EventScreen');
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft:30,
    marginRight: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  info: {
    alignItems: "center",
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "black",
    paddingBottom: 30
  },
  headliner: {
    fontSize: 20
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginLeft: -10,
    marginBottom: 20
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
});
