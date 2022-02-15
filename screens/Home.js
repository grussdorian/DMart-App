import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

function HomeScreen({ route,navigation }) {
    var {AppraisedValue, Color, ID, Owner, Size} = route.params;
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title:ID,
          headerRight: () => (
            <Button onPress={() => navigation.popToTop()} title="Logout" />
          ),
        });
      }, [navigation]);
  
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.text}>Asset Id: {ID}</Text>
            <Text style={styles.text}>Asset Colour: {Color}</Text>
            <Text style={styles.text}>Appraised Value: {AppraisedValue}</Text>
            <Text style={styles.text}>Owner: {Owner}</Text>
            <Text style={styles.text}>Size: {Size}</Text>
        </View>
    )
  }
  export default HomeScreen;  


  const styles = StyleSheet.create({
    text:{
        fontSize:18,
        borderRadius:10,
        margin:'4%',
        padding:'10%',
        backgroundColor:'#ecd5e3'
    }
  });