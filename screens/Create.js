import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

function CreateScreen({ route,navigation }) {
    const [appraisedValue, setAppraisedValue] = useState('data not assigned')
    const [assetId, setAssetId ] = useState('data not assigned')
    const [color, setColor ] = useState('data not assigned')
    const [size, setSize ] = useState('data not assigned')

    var {userId, userName} = route.params;
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title:'Create Asset',
          headerRight: () => (
            <Button onPress={() => navigation.popToTop()} title="Logout" />
          ),
        });
      }, [navigation]);
  
        const [isLoading, setLoading] = useState(true);
        const [data, setData] = useState([]);

        const getData = async () => {
            try {
            const response = await fetch('http://139.180.132.70:3000/createAsset/', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "AppraisedValue": appraisedValue,
                    "Color": color,
                    "assetID": assetId,
                    "Owner": userId,
                    "Size": size
                })
              });
            const json = await response.json();
            setData(json);
            console.log(json);
            } catch (error) {
            console.error(error);
            } finally {
            setLoading(false);
            }
        }

    if(isLoading){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TextInput
                style={[styles.TextInput]}
                placeholder="Appraised Value"
                returnKeyLabel = {"next"}
                onChangeText={(text) => {setAppraisedValue({appraisedValue:text}) } }
                />
                <TextInput
                style={[styles.TextInput] }
                placeholder="Colour"
                returnKeyLabel = {"done"}
                onChangeText={(text) => setColor({color:text})}
                />
                <TextInput
                style={[styles.TextInput]}
                placeholder="Asset Id"
                returnKeyLabel = {"next"}
                onChangeText={(text) => {setAssetId({assetId:text}) } }
                />
                <TextInput
                style={[styles.TextInput] }
                placeholder="Size"
                returnKeyLabel = {"done"}
                onChangeText={(text) => setSize({size:text})}
                />
    
                <View style={styles.btnContainer}>
                    {/* <TouchableOpacity style={styles.userBtn} onPress={()=>{ this.setState({onFirstLoad:false})}}> */}
                    <TouchableOpacity style={styles.userBtn} onPress={getData}>
                        <Text style={styles.btnText}>Create</Text>
                    </TouchableOpacity>
                </View>
    
            </View>
        )
    }
    else{
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{data.message}</Text>
                <Text>{data.msg}</Text>
            </View>
        )
    }
  }
  export default CreateScreen;  



  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'blue',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    TextInput:{
      borderRadius:5,
      width:"60%",
      textAlign:'center',
      fontWeight:'bold',
      fontSize:18,
      color:'#05386b',
      backgroundColor: '#8686af',
      padding: "1%",
      margin: "2%",
    },
  
    btnContainer:{
      width:"30%",
      justifyContent:"center"
    },
  
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