import React from 'react';
import { Text } from 'react-native';

const DateText = () => {
    return (
        <Text>{new Date().toLocaleDateString()}</Text>
    );
};

export default DateText;