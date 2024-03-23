import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import CustomButtonView from './CustomButtonView';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [events, setEvents] = React.useState<any[]>([]);

  const isFabricEnabled = (global as any).nativeFabricUIManager != null;
  const isBridgelessEnabled = Boolean((global as any).RN$Bridgeless);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 20}}>
        <Text style={styles.highlight}>
          isFabricEnabled {String(isFabricEnabled)}
        </Text>
        <Text style={styles.highlight}>
          isBridgelessEnabled {String(isBridgelessEnabled)}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <CustomButtonView
          onChangeMessage={message => {
            console.log('event', message);
            setEvents(prev => [...prev, message]);
          }}
        />
      </View>
      <ScrollView style={{flex: 1}}>
        <Text>Events:</Text>
        {events.map((event, index) => {
          return <Text key={index}>{JSON.stringify(event, null, 2)}</Text>;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

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
