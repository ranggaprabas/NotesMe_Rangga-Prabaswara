import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function Logo() {
  return <Image source={require('../assets/ranggalogo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 98,
    height: 95,
    // color:"#3af36e",
  },
})
