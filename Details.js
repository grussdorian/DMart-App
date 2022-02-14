import * as React from 'react';
import { Button, View, Text } from 'react-native';

function DetailsScreen({route,navigation}) {
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button onPress={() => navigation.popToTop()} title="Logout" />
        ),
      });
    }, [navigation]);
    var {userId, userName } = route.params
    userId = JSON.stringify(userId).slice(11,-2)
    userName = JSON.stringify(userName).slice(13,-2)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>User id : {userId}</Text>
        <Text>User name : {userName}</Text>
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