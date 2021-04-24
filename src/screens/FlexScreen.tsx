import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8bafe8',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flexWrap: 'wrap-reverse'
    },
    caja1: {
        // flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        backgroundColor: '#bff7a3',
        // alignSelf: 'flex-start'
    },
    caja2: {
        // flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        backgroundColor: '#f5b5f1',
        // alignSelf: 'center'
    },
    caja3: {
        // flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        backgroundColor: '#e6eb6e',
        // alignSelf: 'flex-end'
    },
});
