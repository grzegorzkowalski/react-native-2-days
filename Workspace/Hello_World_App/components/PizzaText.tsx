import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PizzaText = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                <Text style={styles.pizza}>Pizza</Text>
                {' '}to bardzo smaczne włoskie danie. Przygotowuje się ją z ciasta drożdżowego.
                Na ciasto wylewa się sos pomidorowy. Na wierzchu układa się składniki:{' '}
                <Text style={styles.bold}>kiełbasę, żółty ser, oliwki, paprykę</Text>
                {'. Istnieje wiele rodzajów '}
                <Text style={styles.pizza}>pizzy</Text>
                {' – może być z mięsem, bezmięsna, rybna lub słodka z '}
                <Text style={styles.pineapple}>ananasem</Text>
                {'.'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
    },
    pizza: {
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    bold: {
        fontWeight: 'bold',
    },
    pineapple: {
        color: '#DAA520',
    },
});

export default PizzaText;