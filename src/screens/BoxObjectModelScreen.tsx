import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
    title: {
        paddingHorizontal: 100,
        marginVertical: 200,
        fontSize: 20,
        // width: 150,
        borderWidth: 5,
        // backgroundColor: 'red',
    },
});
