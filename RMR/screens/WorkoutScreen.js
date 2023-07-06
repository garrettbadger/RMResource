import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard, Linking, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { doc, setDoc, collection, getDocs, deleteDoc} from "firebase/firestore";
import { db } from '../config';
import Card from '../components/Card';

export default function WorkoutScreen() {
  const [workout, setWorkout] = useState('');
  const [workoutBox, setWorkoutBox] = useState([]);

  // Load workouts from Firestore database on component mount
  useEffect(() => {
    loadWorkouts();
  }, []);

  // Function to load workouts from Firestore database
  const loadWorkouts = async () => {
    const querySnapshot = await getDocs(collection(db, 'Workouts'));
    const workouts = [];
    querySnapshot.forEach((doc) => {
      workouts.push({ id: doc.id, workout: 'https://'+doc.data().workout });
    });
    setWorkoutBox(workouts);
  };

  // Function to add a workout to the Firestore database
  const addWorkout = async () => {
    if (workout !== '') {
      await setDoc(doc(db, 'Workouts', workout), {
        workout: workout
      });
      setWorkout('');
      Keyboard.dismiss();
      loadWorkouts(); // Reload workouts after adding a new one
    }
  };
  // Function to delete a workout from the Firestore database
  const deleteWorkout = async (id) => {
    await deleteDoc(doc(db, 'Workouts', id));
    loadWorkouts(); // Reload workouts after deleting one
  };

  // Function to open the link to the workout
  const openWorkoutLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Workouts</Text>
        <FlatList
          data={workoutBox}
          renderItem={({ item }) => (
            <View style={styles.workoutContainer}>
              <TouchableOpacity onPress={() => openWorkoutLink(item.workout)}>
                <Card text={item.workout} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteWorkout(item.id)}
                style={styles.deleteButton}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
          style={styles.items}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputWorkout}
      >
        <TextInput
          style={styles.input}
          placeholder={'Input Workout Link'}
          keyboardType="default"
          value={workout}
          onChangeText={setWorkout}
          multiline={true}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={addWorkout}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>ADD</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
    width: '100%',
    height: '70%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    textAlign: 'center',
  },
  items: {
    flex: 1,
  },
  inputWorkout: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 60,
    borderWidth: 0,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#ff5e3a',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  workoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#ff5e3a',
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});