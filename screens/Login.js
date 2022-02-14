import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity,StatusBar } from 'react-native';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <Text style={[styles.setFont,styles.Align2, {width:"80%", textAlign:'center'} ]}>Welcome</Text>
    <Text style={[styles.setFont,styles.setFontAlignment,styles.Align1]}>Login</Text>
    <TextInput
    style={[styles.TextInput]}
    placeholder="Full Name"
    returnKeyLabel = {"next"}
    // onChangeText={(text) => {this.setState({userName:text}) } }
    />
    <TextInput
    style={[styles.TextInput] }
    placeholder="User Id"
    returnKeyLabel = {"done"}
    //onChangeText={(text) => this.setState({userId:text})}
    />
    <View style={styles.btnContainer}>
      {/* <TouchableOpacity style={styles.userBtn} onPress={()=>{ this.setState({onFirstLoad:false})}}> */}
      <TouchableOpacity style={styles.userBtn} onPress={()=>{navigation.push('Details')}}>
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
      <Text style={[
      styles.setFont,
      styles.setFontAlignment,
      styles.Align1,
      styles.Align3,
      {marginTop:"5%", width:'90%'}
      // ]}>{this.state.loading.Owner} </Text>
      ]}>Dummy </Text>
  </View>
  );
}

export default LoginScreen;


// import { StatusBar } from 'expo-status-bar';
// import React, {useState} from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';

// export default class App extends React.Component {



//   state = {
//     getAll : "http://139.180.132.70:3000/getAssets",
    
//     onFirstLoad: true,
//     fontsLoaded: false,
//     userName: '',
//     userId: '',
//     data : {'activity':'Loading now....'},
//     loading: 'Loading...',
//     assets: []
//   };

//    async getJsonData(){
//     let res = await fetch("http://139.180.132.70:3000/readAsset?assetID=asset1")
//     let resJson = await res.json()
//     console.log(resJson)
//     this.setState({loading:resJson})
//     //this.setState({assets})
//   }

//   async loadFonts() {
//     await Font.loadAsync({
//       // Load a font from a static resource
//       DancingScript: require('./assets/fonts/DancingScript-Bold.ttf'),
//       NotoSerif :  require('./assets/fonts/NotoSerif-Bold.ttf'),
//     });
//     this.setState({ fontsLoaded: true });
//   }

//   componentDidMount() {
//     this.loadFonts();
//     this.getJsonData();
//   }
    
//   render(){
//     if (this.fontsLoaded) {
//       return <AppLoading />;
//     }else if(this.state.onFirstLoad){
//     return (
//         <View style={styles.container}>
//           <Text style={[styles.setFont,styles.Align2, {width:"80%", textAlign:'center'} ]}>Welcome</Text>
//           <StatusBar style="auto" />
//           <Text style={[styles.setFont,styles.setFontAlignment,styles.Align1, {fontFamily: 'NotoSerif'}]}>Login</Text>
//           <TextInput
//           style={[styles.TextInput]}
//           placeholder="Full Name"
//           returnKeyLabel = {"next"}
//           onChangeText={(text) => {this.setState({userName:text}) } }
//           />
//           <TextInput
//           style={[styles.TextInput] }
//           placeholder="User Id"
//           returnKeyLabel = {"done"}
//           onChangeText={(text) => this.setState({userId:text})}
//           />
//           <View style={styles.btnContainer}>
//             <TouchableOpacity style={styles.userBtn} onPress={()=>{ this.setState({onFirstLoad:false})}}>
//               <Text style={styles.btnText}>Submit</Text>
//             </TouchableOpacity>
//           </View>
//           <StatusBar style="auto" barStyle="light-content"/>
//           <Text style={[
//             styles.setFont,
//             styles.setFontAlignment,
//             styles.Align1,
//             styles.Align3,
//             {fontSize:18}
//             ]}>An attempt to make a NFT marketplace using hyperledger fabric.</Text>

//             <Text style={[
//             styles.setFont,
//             styles.setFontAlignment,
//             styles.Align1,
//             styles.Align3,
//             {marginTop:"5%", width:'90%'}
//             ]}>Hyperledger Fabric is intended as a foundation for developing applications or solutions with a modular architecture. Hyperledger Fabric allows components, such as consensus and membership services, to be plug-and-play. Its modular and versatile design satisfies a broad range of industry use cases. It offers a unique approach to consensus that enables performance at scale while preserving privacy.</Text>
//             <Text style={[
//             styles.setFont,
//             styles.setFontAlignment,
//             styles.Align1,
//             styles.Align3,
//             {marginTop:"5%", width:'90%'}
//             ]}>{this.state.loading.Owner} </Text>
//         </View>
//     );
//   }else{
//     return(
//       <View  style={styles.container}>
//         <Text style={[styles.setFont,styles.Align2,{width:"80%", textAlign:'center'}]} >Welcome {this.state.userName}</Text>

        
//       </View>
//     )

//   }
//   }
// }

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