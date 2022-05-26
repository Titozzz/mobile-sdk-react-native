/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NativeEventEmitter } from 'react-native';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RNRefiner from 'refiner-react-native';
import { DeviceEventEmitter, NativeEventEmitter, NativeModules} from 'react-native';

const eventEmitter = new NativeEventEmitter();

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  var userTraits = { email: 'hello@hello.com', a_number: 123, a_date: '2022-16-04 12:00:00' };

  RNRefiner.initialize('56421950-5d32-11ea-9bb4-9f1f1a987a49');
  RNRefiner.identifyUser('my-user-id', null, null);

  RNRefiner.showForm('616fc500-5d32-11ea-8fd5-f140dbcb9780', true);



  eventEmitter.addListener('onBeforeShow', (event) => {
    console.log('onBeforeShow');
    console.log(event.formId);
    console.log(event.formConfig);
  });

  eventEmitter.addListener('onNavigation', (event) => {
    console.log('onNavigation');
    console.log(event.formId);
    console.log(event.formElement);
    console.log(event.progress);
  });

  eventEmitter.addListener('onShow', (event) => {
    console.log('onShow');
    console.log(event.formId);
  });

  eventEmitter.addListener('onDismiss', (event) => {
    console.log('onDismiss');
    console.log(event.formId);
  });

  eventEmitter.addListener('onClose', (event) => {
    console.log('onClose');
    console.log(event.formId);
  });

  eventEmitter.addListener('onComplete', (event) => {
    console.log('onComplete');
    console.log(event.formId);
    console.log(event.formData);
  });


  RNRefinerEventEmitter.addListener(RNRefinerEventEmitter.RefinerOnBeforeShow, (event) => {
      
  });


  const createTwoButtonAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
  
  createTwoButtonAlert();
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
