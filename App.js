import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = goalTitle => {
        console.log(goalTitle);
        // setCourseGoals([...courseGoals, enteredGoal]);
        setCourseGoals(currentGoals => [
            ...currentGoals,
            {id: Math.random().toString(), value: goalTitle}
        ]);
        setIsAddMode(false);
    };

    const removeGoalHandler = goalId => {
        console.log('delete pressed');
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId)
        });
    };
    const cancelAddGoalHandler = () => {
        setIsAddMode(false);
    };
  return (
    <View style={styles.screen}>
        <Button title="Add new goal" onPress={setIsAddMode.bind(this, true)}/>
        <GoalInput
            visible={isAddMode}
            onAddGoal={addGoalHandler}
            onCancel={cancelAddGoalHandler}
        />
      <FlatList
          data={courseGoals}
          renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>}
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
