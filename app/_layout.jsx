import {Button, Text, View, Pressable, StyleSheet, TextInput, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function RootLayout(){ 
const [name, setName] =useState('');
const [message, setMessage] =useState('');
const [bdayImage, setBdayImage] = useState('');

const getData = () =>{
  fetch("http://localhost:3000/birthday")
  .then((res)=> res.json())
  .then(resJson => {
    console.log(resJson)
  }).catch(e=> {console.log(e)})
}

const postData =() =>{
  axios.post("http://localhost:3000/birthday",{
    name,
    message
  }).then((res)=>{
    alert('Uploaded successfully!')
  }).catch((err)=>{
    alert('Failed to upload card user due to :'+ err.message);
  });
}

useEffect(()=> {
  getData();
}, [])



function addCard(e){
  //e.preventDefault(e);
  let details = {name, message};
  console.log(details);
  postData();
}

  return (
    <SafeAreaView style={styles.container}>
      {/* <TextInput placeholder="Enter name"/> */}
      <Text>{name}</Text>
      <Text>{message}</Text>
      <Image
        source={require('@/assets/images/bday-img-bg.png')}
        style={{width:250, height:250, justifyContent: 'center',}}
      />
      <TextInput
          style={styles.input}
          //onChangeText={enterName}
         onChangeText={(text) => setName(text)}
          value={name}
          placeholder="Enter Name"
          keyboardType="numeric"
        />
         <TextInput
          style={styles.input}
          onChangeText={(text) => setMessage(text)}
           //onChangeText={enterName} //=> {this.setState({email:text})}
          value={message}
          placeholder="Enter message"
          keyboardType="numeric"
        />
        <Button
  title="Enter"
  color="orange"
  accessibilityLabel="Learn more about this purple button"
  onPress={() => addCard('button pressed')}
  
/>
        {/* <Pressable>
          <Text onPress={() => {console.log('button pressed')}}>
            Enter
          </Text>
        </Pressable> */}
        <StatusBar backgroundColor="#010709" style="light"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'pink',
    padding:15,
    margin:20,
    borderRadius:0.10,
    flex:1,
    paddingHorizontal:20
  },
  input:{
    borderRadius:5,
    borderColor:"black",
    color:"white",
    padding:8,
    marginBottom:5,
    backgroundColor: 'grey',
  }
})
