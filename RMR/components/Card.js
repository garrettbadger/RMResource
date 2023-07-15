import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Card = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightblue',
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    height: 65,
    width: 250
    
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '100%',
  },
  circular: {
    marginLeft: 10,
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Card;