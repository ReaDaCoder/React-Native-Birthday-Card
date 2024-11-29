import {Button, Text, View, Pressable, StyleSheet, TextInput, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

export default function RootLayout(){ 
const [name, setName] =useState('');
const [msg, setMsg] =useState('');
const [bdayImage, setBdayImage] = useState('');



function enterName(){
  //e.preventDefault();
}

  return (
    <SafeAreaView style={styles.container}>
      {/* <TextInput placeholder="Enter name"/> */}
      <Text></Text>
      <Image
        source={require('@/assets/images/bday-img-bg.png')}
        style={{width:250, height:250, justifyContent: 'center',}}
      />
      <TextInput
          style={styles.input}
          onChangeText={enterName}
          value={name}
          placeholder="Enter Name"
          keyboardType="numeric"
        />
         <TextInput
          style={styles.input}
          onChangeText={enterName}
          value={msg}
          placeholder="Enter message"
          keyboardType="numeric"
        />
      <Text>
        Happy birthday
        </Text>
        <Button
  title="Enter"
  color="orange"
  accessibilityLabel="Learn more about this purple button"
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
    borderRadius:0.10
  },
  input:{
    borderRadius:0.10,
    borderColor:"black",
    color:"#ffffff"
  }
})
