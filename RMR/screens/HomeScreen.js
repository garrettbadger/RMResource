import { StyleSheet, Text, View, Button } from 'react-native';
import Nav from '../components/Nav';
import Dashboard from '../components/Dashboard';

export default function HomeScreen({ navigation }) {
  return (
    
      
      <View style={styles.container}>
    
        <View style={styles.navContainer}>
            <Button style={styles.nav} title="Study" onPress={() => navigation.navigate("Study")}/>
            <Button style={styles.nav} title="Meals" onPress={() => navigation.navigate("Meals")}/>
            <Button style={styles.nav} title="Music" onPress={() => navigation.navigate("Music")}/>
            <Button style={styles.nav} title="Mentor" onPress={() => navigation.navigate("Mentor")}/>
            <Button style={styles.nav} title="Workout" onPress={() => navigation.navigate("Workout")}/>
        </View>
        <View style={styles.main}>
          <Dashboard text='Home' style={styles.dashboard}/>
          <Dashboard text='Study' style={styles.dashboard}/>
          <Dashboard text='Meals' style={styles.dashboard}/>
          <Dashboard text='Workout' style={styles.dashboard}/>
          <Dashboard text='Music' style={styles.dashboard}/>
          <Dashboard text='Mentor' style={styles.dashboard}/>
        </View>
        
      </View>
      
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  navContainer: {
    flex: 1,
    flexDirection: 'row',
    
  },
  nav:{
    margin:20,
  },
  main:{
    flex: 15,
    width: '100%',
    height: 100,

  },
  dashboard:{
    padding: 20,
    margin: 20,
    
  },
});
