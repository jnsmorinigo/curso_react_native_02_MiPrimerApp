import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

export const Tarea8Screen = () => {
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    cajaCian: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#00ffff'
    },
    cajaMagenta: {
        width: 100,
        height: 100,
        borderWidth: 10,
        left: 100,
        borderColor: 'white',
        backgroundColor: '#ff00ff'
    },
    cajaAmarillo: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#ffff00'
    }
});
