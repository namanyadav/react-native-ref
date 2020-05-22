import React from 'react';
import {Text, View, StyleSheet, TouchableNativeFeedback} from "react-native";

const GoalItem = props => {
    return (
        <TouchableNativeFeedback activeOpacity={0.2} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default GoalItem;