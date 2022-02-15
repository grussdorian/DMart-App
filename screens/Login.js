import * as React from 'react';
import {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,StatusBar } from 'react-native';

function LoginScreen({ navigation }) {
  const [userName, setUserName] = useState('data not assigned')
  const [userId, setUserId ] = useState('data not assigned')
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <Text style={[styles.setFont,styles.Align2, {width:"80%", textAlign:'center'} ]}>Welcome</Text>
    <Text style={[styles.setFont,styles.setFontAlignment,styles.Align1]}>Login</Text>
    <TextInput
    style={[styles.TextInput]}
    placeholder="Full Name"
    returnKeyLabel = {"next"}
    onChangeText={(text) => {setUserName({userName:text}) } }
    />
    <TextInput
    style={[styles.TextInput] }
    placeholder="User Id"
    returnKeyLabel = {"done"}
    onChangeText={(text) => setUserId({userId:text})}
    />
    <View style={styles.btnContainer}>
      {/* <TouchableOpacity style={styles.userBtn} onPress={()=>{ this.setState({onFirstLoad:false})}}> */}
      <TouchableOpacity style={styles.userBtn} onPress={()=>{navigation.push('Details',{userName:userName,userId:userId})}}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
    <StatusBar style="auto" barStyle="light-content"/>
    <Text style={[
      styles.setFont,
      styles.setFontAlignment,
      styles.Align1,
      styles.Align3,
      {fontSize:18}
      ]}>An attempt to make a NFT marketplace using hyperledger fabric.</Text>

      <Text style={[
      styles.setFont,
      styles.setFontAlignment,
      styles.Align1,
      styles.Align3,
      {marginTop:"5%", width:'90%'}
      ]}>Hyperledger Fabric is intended as a foundation for developing applications or solutions with a modular architecture. Hyperledger Fabric allows components, such as consensus and membership services, to be plug-and-play. </Text>
  </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#5cdb95',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  setFont :{
    color:'#edf5e1',
    fontSize: 60
  },
  Align1:{
    //margin:"%",
    
  },
  Align2:{
    marginTop:"10%",
    marginBottom:"8%"
  },
  Align3:{
    fontFamily:'sans-serif',
    fontSize:14,
    fontWeight:'bold',
    marginTop:"10%",
    textAlign:'justify',
    width:'60%'
  },
  TextInput:{
    borderRadius:5,
    width:"60%",
    textAlign:'center',
    fontWeight:'bold',
    fontSize:18,
    color:'#05386b',
    backgroundColor: '#edf5e1',
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