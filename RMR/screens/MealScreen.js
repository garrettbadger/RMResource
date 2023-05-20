import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard } from 'react-native';
import React, { useState } from 'react';
import Recipe from '../components/Recipe';


export default function MealScreen() {
  const [recipe, setRecipe] = useState('');
  const [recipeBox, setRecipeBox] = useState([]);

  const handleRecipeInput = (input) => {
        
    setRecipe(input);
    
  };
  const inputRecipe= () => {
    if (recipe != '') {
      Keyboard.dismiss()
      setRecipeBox([...recipeBox, recipe]);
      setRecipe('');
    }
  }

  const completeRecipe = (index) => {
    let itemsCopy = [...recipeBox];
    itemsCopy.splice(index, 1);
    setRecipeBox(itemsCopy);
  }
  return (
    <View style={styles.container}>
      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}>Recipes</Text>
        <View style = {styles.items}>
          {
            recipeBox.map((item, index) =>{
              return (
                <TouchableOpacity onPress={() => completeRecipe(index)}>
                  <Recipe key={index} text={item}/>
                </TouchableOpacity>
                
              )
            })
          }
          
        </View>
      </View>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.inputRecipe}
      >
        
        <TextInput
        style={styles.input} 
        placeholder={'Input Recipe'}
        keyboardType="default"
        value={recipe}
        onChangeText={recipe => handleRecipeInput(recipe)}
        />
        <TouchableOpacity onPress={() => inputRecipe()}>
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
    width: '100%', 
    height: 600, 
    backgroundColor: '#fff', 
    borderRadius: 80, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderColor: '#C0C0C0', 
    borderWidth: 1,
    position: 'absolute',
    // bottom: 500,
    right: 0
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    paddingBottom: 100, 
    
  },
  items:{
    marginTop:30,
  },
  inputRecipe:{
    position: 'absolute',
    bottom: 0, 
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
  
});