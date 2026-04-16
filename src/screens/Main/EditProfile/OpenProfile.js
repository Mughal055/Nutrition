import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'


const OpenProfile=()=> {
   const user = auth().currentUser;



  return (
    <View>
      <Text>Email: {user?.email}</Text>
      <Text>Uid: {user?.uid}</Text>
      {/*  */}
      <TouchableOpacity style={{backgroundColor:'red',alignItems:'center',padding:10,borderRadius:25,width:'80%',marginVertical:20}}
      onPress={async()=>{
        await auth().signOut()}}>
        <Text style={{color:'#fff'}}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}
export default OpenProfile;