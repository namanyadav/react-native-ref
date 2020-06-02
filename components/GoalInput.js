import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet, Modal} from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    const addGoadHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}/>
                <View style={styles.buttonContainer}>
                    <Button title="Cancel" color="red" onPress={props.onCancel}></Button>
                    <Button title="Add" onPress={addGoadHandler}/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '30%'
    }
});

export default GoalInput;