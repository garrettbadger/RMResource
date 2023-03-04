import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Dashboard = (props) => {
    return (
        <View style={styles.dashboard}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   dashboard:{
    backgroundColor: 'grey',
    padding:15,
    borderStyle:'solid',
    marginBottom: 20,
    marginTop: 12,
    height:85,
    justifyContent: 'center'

   },
   text:{
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
   }
});

export default Dashboard;