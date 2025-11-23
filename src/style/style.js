import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('screen');
var a = StyleSheet.create({
    text:{
        fontSize:50,
    },
     food:{
        //  justifyContent:'center',
        //  alignItems:'center',
        fontFamily:'Poppins-Regular',
        fontWeight:'bold',
         fontSize:21,
     },
     para:{
       fontFamily:'Poppins-Regular',
        textAlign:'center',
        justifyContent:'center', 
        fontSize:17,
        fontWeight:'400',
        color:'#00000073',
        marginVertical:10,
        paddingVertical:10,
        lineHeight:20,
        // marginBottom:25,
        // flex:1,
     },
     title:{
      //  flex:1,
      fontFamily:'Poppins-SemiBold',
      color:'black',
       fontWeight:'600',
       fontSize:25,
       marginTop:140,

     },
     dot:{
      flex:1,
      //  backgroundColor:'#691BFB',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'flex-end',
      marginBottom:2,
      paddingBottom:0,
      marginVertical:15,
      marginTop:0,
     },
     dot1:{
      backgroundColor:'#691BFB',
      width:15,
      height:9,
      marginHorizontal:4,
      borderRadius:5,
     },
     dot2:{
      backgroundColor:'#9780c291',
      width:10,
      height:8,
      marginHorizontal:2,
      borderRadius:6,
     },
     dot3:{
       backgroundColor:'#9780c291',
      width:10,
      height:8,
      marginHorizontal:2,
      borderRadius:6,
     },
     BG:{
      height:300,
      width:300,
},
WelH:{
  marginTop:20,
  paddingBottom:5,
  fontSize:32,
  textAlign:'center',
  fontFamily:'Poppins-Medium',
  color:'#292D32',
  fontWeight:'500',
  justifyContent:'center',
  lineHeight:34,
},
tex:{
  color:"#817b7bff",
 fontWeight:'bold',
},
texx:{
  color:"#000",
//  fontWeight:'bold',
 fontSize:16,
 fontFamily:'Poppins-Medium'
},
badge:{
  color:'#000',
  fontSize:15,
  fontWeight:'bold',
  backgroundColor:'#FFF',
  borderRadius:20,
  padding:5,
  paddingHorizontal:10,
  paddingVertical:4,
  position:'absolute',
},
Input:{

borderWidth: 1,
  marginTop: 10,
  marginLeft:10,
  marginBottom:20,
  // paddingHorizontal:10,
  borderColor:'#837d7dff',
  padding:10,
  width: width - 20,
},
Iinput:{
paddingLeft:50,
borderWidth: 1,
  marginTop: 10,
  marginLeft:10,
  marginBottom:20,
  // paddingHorizontal:10,
  borderColor:'#837d7dff',
  padding:10,
  width: width - 20,
},
  main: {
    position: 'relative',
  },
  icon: {
    color:'#691BFB',
    position: 'absolute',
    top: 18,
    left: 20,
  },

 });
 
export {a};