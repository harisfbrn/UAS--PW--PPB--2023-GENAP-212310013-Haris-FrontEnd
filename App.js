import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import color from './src/style/color.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoarding from './src/components/OnBoarding.js';
import Login from './src/components/Login.js';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [viewedOnBoading, setViewedOnBoarding] = useState(false);
  const checkOnBoarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnBoarding');

      if (value !== null) {
        setViewedOnBoarding(true)
      }
    } catch (err) {
      console.log('Error @checkOnBoarding', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkOnBoarding();
  }, [])
  return (
    <View style={styles.container}>
      {loading ? <Loading /> : viewedOnBoading ? <Login /> : <OnBoarding />}
      <StatusBar style="light" />
    </View>
  );
};


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
