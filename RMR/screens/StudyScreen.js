import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import React, { useState } from 'react';






export default function StudyScreen() {
   
    const [number, setNumber] = useState(0);
    const [goal, setGoal] = useState(0);
    const [studied, setStudied] = useState(0);
    const [timeStudied, setTimeStudied] = useState(0);
    
    const handleNumberInput = (input) => {
      // Remove non-numeric characters from the input
      const cleanedInput = input.replace(/[^0-9]/g, '');
      setNumber(cleanedInput);
      
    };
    const handleStudiedInput = (input) => {
      // Remove non-numeric characters from the input
      const cleanedInput = input.replace(/[^0-9]/g, '');
      setStudied(cleanedInput);
      
    };
    
    const logInput = () => {
      if (number != 0) {
        setGoal(number)
        setNumber(0);
      }
      
    };
    const inputStudied = () => {
      if (studied != 0) {
        setTimeStudied(studied);
        setStudied(0);
      }
      
    }
  return (
    <View style={styles.container}>
      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}>Today's tasks</Text>
        <View style = {styles.items}>
          <Text>"Goal: {goal}m Read: {timeStudied}m Time left: {goal - timeStudied}m"</Text>
        </View>
      </View>

      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.inputStudyTime}
      >
        
        <TextInput
        style={styles.input} 
        placeholder={'Input study time goal'}
        keyboardType="numeric"
        value={number}
        onChangeText={number => handleNumberInput(number)}
        />
        <TouchableOpacity onPress={() => logInput()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>ADD</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.inputStudiedTime}
      >
        
        <TextInput
        style={styles.input} 
        placeholder={'Input time studied'}
        keyboardType="numeric"
        value={studied}
        onChangeText={studied => handleStudiedInput(studied)}
        />
        <TouchableOpacity onPress={() => inputStudied()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>ADD</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  tasksWrapper: {
    paddingTop: 0,
    paddingHorizontal: 20,
    width: 250, 
    height: 200, 
    backgroundColor: '#fff', 
    borderRadius: 80, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderColor: '#C0C0C0', 
    borderWidth: 1,
    position: 'absolute',
    bottom: 450,
    right: 80
    
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  items:{
    marginTop:30,
  },
  inputStudyTime:{
    position: 'absolute',
    bottom: 60, 
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  inputStudiedTime:{
    position: 'absolute',
    bottom: 150, 
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15 ,
    backgroundColor: '#fff', 
    borderRadius: 60, 
    borderColor: '#C0C0C0', 
    borderWidth: 1,
    width: 250,

  },
  addWrapper:{
    width: 60, 
    height: 60, 
    backgroundColor: '#fff', 
    borderRadius: 60, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderColor: '#C0C0C0', 
    borderWidth: 1,
    
  },
  addText:{},
});
