import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface FABProps {
    onPress: () => void;
}

const FAB: React.FC<FABProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007AFF',
        borderRadius: 30,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        elevation: 5,
    },
    label: {
        color: 'white',
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default FAB;

