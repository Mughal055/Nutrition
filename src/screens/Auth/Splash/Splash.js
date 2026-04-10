import { View, Image, Text } from 'react-native';

// import React,{useEffect,useState} from 'react'
// import database from '@react-native-firebase/database';

const Splash = () => {
  //  const [gainData, setgainData] = useState(null)
  //   //
  //   useEffect(() => {
  //     getData();
  //   }, [])
  //   //
  //   const getData = async ()=>{
  //     try {
  //       const dataa = await database().ref('users/1').once('value');
  //        console.log(dataa.val())
  //        setgainData(dataa.val())

  //         if (dataa.exists()) {
  //     setgainData(dataa.val());
  //   } else {
  //     alert('No data found ❌');
  //   }
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //    console.log('err')
  //   //  const navigation = useNavigation();
  //   return (
  //   <View>
  //     <View>
  //       <Text>{gainData?gainData.name:'Loading..'}</Text>
  //       <Text>{gainData?gainData.age:'Loading..'}</Text>
  //     </View>
  //   </View>
  // )
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={require('../../../assets/Img/background.png')}
        resizeMode="contain"
        style={{ width: 50, height: 50 }}
      />
      <Text
        style={{
          fontFamily: 'Poppins-SemiBold',
          fontSize: 14,
          marginTop: 5,
        }}
      >
        Food Track
      </Text>
    </View>
  );
};
export default Splash;
