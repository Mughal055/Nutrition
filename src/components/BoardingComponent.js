import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const BoardingComponent = ({ image, title, onPress, activeIndex }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Image + Gradient */}
      <View style={styles.imageContainer}>
        {/* Image */}
        <Image source={image} style={styles.image} />

        {/* Gradient Overlay (FIXED) */}
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <LinearGradient
            colors={['red', 'blue']}
            style={{ height: 200, width: 200 }}
          />
        </View>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>

        {/* Dots */}
        <View style={styles.dots}>
          {[0, 1, 2].map((_, i) => (
            <View
              key={i}
              style={[styles.dot, activeIndex === i && styles.dotActive]}
            />
          ))}
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BoardingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  imageContainer: {
    width: width,
    height: 420,
    position: 'relative',
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  // 🔥 MAIN FIX (overlay)
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    backgroundColor: '#000',
  },

  title: {
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
    paddingHorizontal: 30,
    fontFamily: 'Poppins-SemiBold',
  },

  dots: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },

  dotActive: {
    width: 25,
    backgroundColor: '#fff',
  },

  button: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.85,
    height: 60,
    backgroundColor: '#691BFB',
  },

  btnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
  },
});
