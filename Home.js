import * as React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
    const [count, setCount] = React.useState(0);
  
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Button onPress={() => navigation.popToTop()} title="Logout" />
          ),
        });
      }, [navigation]);
  
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    )
  }
  export default HomeScreen;  