import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Nav = (props) => {
    return (
        <View style={styles.nav}>
            <View style={styles.navItem}><Text style={styles.text}>Home</Text></View>
            <View style={styles.navItem}><Text style={styles.text}>Study</Text></View>
            <View style={styles.navItem}><Text style={styles.text}>Meals</Text></View>
            <View style={styles.navItem}><Text style={styles.text}>Workout</Text></View>
            <View style={styles.navItem}><Text style={styles.text}>Music</Text></View>

        </View>
    )
}

const styles = StyleSheet.create({
   nav:{
    flex: 1, 
    flexDirection: 'row',
    padding: 2,
   },
   navItem:{
    padding: 3,
    borderWidth: 2,
    justifyContent: 'center'
   },
   text:{
    fontSize: 22,
    
   }
});

export default Nav;