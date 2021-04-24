import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

export const Tarea5Screen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaCian} />
            <View style={styles.cajaMagenta} />
            <View style={styles.cajaAmarillo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#57ed40',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cajaCian: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#00ffff'
    },
    cajaMagenta: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#ff00ff'
    },
    cajaAmarillo: {
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#ffff00'
    }
});
