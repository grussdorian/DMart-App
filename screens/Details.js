import * as React from 'react';
import { Button, View, Text } from 'react-native';

function DetailsScreen({navigation}) {
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button onPress={() => navigation.popToTop()} title="Logout" />
        ),
      });
    }, [navigation]);
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.push('Details')}
        />
         <Button
          title="Go to Home"
          onPress={() => navigation.push('Home')}
        />
      </View>
    );
  }

export default DetailsScreen;  