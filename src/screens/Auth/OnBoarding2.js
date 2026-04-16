// import React from 'react';
// import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Onboarding from 'react-native-onboarding-swiper';
// import { useNavigation } from '@react-navigation/native';

// // Images
// import img1 from '../../assets/Img/img1.png';
// import img2 from '../../assets/Img/img2.png';
// import img3 from '../../assets/Img/img3.png';

// const OnBoarding1 = () => {
//   const navigation = useNavigation();

//   const screens = [
//     {
//       image: img1,
//       title: 'Maintaining Good Health Should Be The Primary Focus Of Everyone.',
//     },
//     {
//       image: img3,
//       title: 'Calculate Calories Of Healthy Recipes From All Over The World.',
//     },
//     {
//       image: img2,
//       title: 'With Amazing Built Tools You Can Track Your Progress.',
//     },
//   ];

//   return (
//     <Onboarding
//       onDone={() => navigation.replace('Boarding1')}
//       onSkip={() => navigation.replace('Boarding1')}
//       pages={screens.map(item => ({
//         backgroundColor: '#000',
//         image: (
//           <View style={{ width: 300, height: 300 }}>
//             <Image
//               source={item.image}
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 resizeMode: 'cover',
//                 borderRadius: 10,
//               }}
//             />
//             {/* Gradient overlay */}
//             <LinearGradient
//               colors={['rgba(0,0,0,0.7)', 'transparent']}
//               style={styles.gradientTop}
//             />
//           </View>
//         ),
//         title: item.title,
//         subtitle: '',
//       }))}
//       titleStyles={{
//         color: '#fff',
//         fontSize: 22,
//         textAlign: 'center',
//         fontFamily: 'Poppins-SemiBold',
//       }}
//       dotStyle={{
//         width: 6,
//         height: 6,
//         borderRadius: 3,
//         backgroundColor: '#fff',
//       }}
//       activeDotStyle={{
//         width: 25,
//         height: 6,
//         borderRadius: 3,
//         backgroundColor: '#fff',
//       }}
//       DoneButtonComponent={({ ...props }) => (
//         <TouchableOpacity {...props}>
//           <Text style={{ color: '#fff', marginRight: 15 }}>Get Started</Text>
//         </TouchableOpacity>
//       )}
//       NextButtonComponent={({ ...props }) => (
//         <TouchableOpacity {...props}>
//           <Text style={{ color: '#fff', marginRight: 15 }}>Continue</Text>
//         </TouchableOpacity>
//       )}
//     />
//   );
// };

// export default OnBoarding1;

// const styles = StyleSheet.create({
//   gradientTop: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     height: 100, // adjust gradient height
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
// });
