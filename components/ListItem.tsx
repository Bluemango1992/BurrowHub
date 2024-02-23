import styles from "@/styles/style";
import React from "react";
import { View, Text, Button } from "react-native";

type ListItemProps = {
  title: string;
  caption: string;
  onPress?: () => void;
};

const ListItem = ({ title, caption, onPress }: ListItemProps) => {
    return (
        <View style={styles.listItems}>
        <Text style={styles.listitemTitle}>{title}</Text>
        <Text style={styles.listitemCaption}>{caption}</Text>
        {onPress && <Button title="View" onPress={onPress} />}
        </View>
    );
    }

export default ListItem;

