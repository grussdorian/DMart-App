import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
function DetailsScreen({route,navigation}) {
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button onPress={() => navigation.popToTop()} title="Logout" />
        ),
      });
    }, [navigation]);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
     try {
      const response = await fetch('http://139.180.132.70:3000/getAssets');
      const json = await response.json();
      setData(json);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

    useEffect(() => {
      getData();
    }, []);
    

    var {userId, userName } = route.params
    userId = JSON.stringify(userId).slice(11,-2)
    userName = JSON.stringify(userName).slice(13,-2)
    if (!isLoading){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


            <TouchableOpacity style={styles.userBtn} onPress={()=>{navigation.navigate('Create',{userName:userName,userId:userId})}}>
                <Text style={styles.btnText}>Create Asset</Text>
            </TouchableOpacity>

            <FlatList
            data={data}
            keyExtractor={({ ID }, index) => ID}
            renderItem={({ item }) => (
                <Text style={{marginTop:"8%", padding:"2%", backgroundColor:'#ecd5e3', borderRadius:10, fontSize:18}}
                onPress={() => navigation.push('Home',item)}
                >Value: {item.AppraisedValue} Size: {item.Size} Colour: {item.Size}</Text>
            )}
            />
        {/* <Text>{isLoading? <ActivityIndicator /> : data[0].title} placeholder</Text> */}
      </View>
    );
    }
    else{
        return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Loading</Text>
        </View>
        )
    }
  }

  const styles = StyleSheet.create({
    userBtn:{
      borderRadius:5,
      margin:"4%",
      padding:"3%",
      backgroundColor:"#05386b",
      color:'white'
    },
    btnText:{
      fontSize:18,
      color:'#edf5e1',
      textAlign:'center',
      fontWeight:"bold"
    }
  });
export default DetailsScreen;  
