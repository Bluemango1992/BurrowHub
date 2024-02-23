import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from '../styles/style';

type ButtonProps = {
    onPress: () => void;
    primary?: boolean;
    disabled?: boolean;
    title: string;
    };


const Button = ({ onPress, primary, title, disabled }: ButtonProps) => {


  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
