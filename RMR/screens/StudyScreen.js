import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard } from 'react-native';
import React, { useEffect, useState } from 'react';
import { doc, setDoc, collection, getDocs, deleteDoc, addDoc} from "firebase/firestore";
import { db } from '../config';


export default function StudyScreen() {
   
  const [goal, setGoal] = useState(0);
  const [studied, setStudied] = useState(0);

  useEffect(() => {
    loadGoal();
    loadStudied();
  }, []);

  const loadGoal = async () => {
    const querySnapshot = await getDocs(collection(db, 'Goal'));
    let goalValue = 0;
    querySnapshot.forEach((doc) => {
      goalValue = doc.data().goal;
    });
    setGoal(goalValue);
  };

  const loadStudied = async () => {
    const querySnapshot = await getDocs(collection(db, 'Studied'));
    let studiedValue = 0;
    querySnapshot.forEach((doc) => {
      studiedValue = doc.data().studied;
    });
    setStudied(studiedValue);
  };

  const addGoal = async () => {
    if (goal !== 0) {
      await setDoc(doc(db, 'Goal', 'goal'), {
        goal: goal
      });
      setGoal(0);
      Keyboard.dismiss();
      loadGoal();
    }
  };

  const addStudied = async () => {
    if (studied !== 0) {
      await setDoc(doc(db, 'Studied', 'studied'), {
        studied: studied
      });
      setStudied(0);
      Keyboard.dismiss();
      loadStudied();
    }
  };

  const handleGoalInput = (input) => {
    const cleanedInput = input.replace(/[^0-9]/g, '');
    setGoal(cleanedInput);
  };

  const handleStudiedInput = (input) => {
    const cleanedInput = input.replace(/[^0-9]/g, '');
    setStudied(cleanedInput);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Study Goal</Text>
        <View style={styles.items}>
          <Text style={styles.text}>Goal: {goal}m Read: {studied}m Time left: {goal - studied}m</Text>
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.inputStudyTime}>
        <TextInput
          style={styles.input}
          placeholder="Input study time goal"
          keyboardType="numeric"
          value={goal.toString()}
          onChangeText={handleGoalInput}
        />
        <TouchableOpacity onPress={addGoal}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>ADD</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.inputStudiedTime}>
        <TextInput
          style={styles.input}
          placeholder="Input time studied"
          keyboardType="numeric"
          value={studied.toString()}
          onChangeText={handleStudiedInput}
        />
        <TouchableOpacity onPress={addStudied}>
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
    backgroundColor: '#348ee3',
  },
  tasksWrapper: {
    paddingTop: 0,
    paddingHorizontal: 20,
    width: 350,
    height: 200,
    backgroundColor: 'lightblue',
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    position: 'absolute',
    bottom: 450,
    right: 25,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
    fonstSize: 30,
  },
  text: {
    fontSize: 20,
  },
  inputStudyTime: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  inputStudiedTime: {
    position: 'absolute',
    bottom: 150,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'lightblue',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    fontSize:20,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'lightblue',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
