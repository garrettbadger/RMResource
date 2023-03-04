import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function WorkoutScreen() {
  return (
    <View style={styles.container}>
      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}>Today's tasks</Text>
        <View style = {styles.items}>
          <Text>"Hello I Am WorkoutScreen"</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  items:{
    marginTop:30,
  },
});