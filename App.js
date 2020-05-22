import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = goalTitle => {
        console.log(goalTitle);
        // setCourseGoals([...courseGoals, enteredGoal]);
        setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalTitle}]);
    };
  return (
    <View style={styles.screen}>
        <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList
          data={courseGoals}
          renderItem={itemData => <GoalItem onDelete={() => {console.log('delete pressed')}} title={itemData.item.value}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      padding: 50
    },
    input: {
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      width: '80%'
    }
});
