import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

type DataTimerProps = {
    currentTime: string;
};

const DataTimer = ({ currentTime }: DataTimerProps) => {
    const [time, setTime] = useState<string>(currentTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => {
                console.log(prev);
                return new Date().toLocaleTimeString()});
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <View style={styles.timerBox}>
            <Text style={styles.label}>🕐 Bieżący czas uruchomienia aplikacji:</Text>
            <Text style={styles.time}>{time}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4f8',
        padding: 20,
    },
    timerBox: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        gap: 12,
    },
    label: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
    },
    time: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
        textAlign: 'center',
    },
});

export default DataTimer;