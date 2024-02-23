import React from 'react'
import { View, Text } from 'react-native'
import styles from '@/styles/style'
import Button from './Button'
import ListItem from './ListItem'
import { useState } from 'react'
import FAB from './FAB'

interface ObservationCardProps {
        title: string;
        description: string;
        picture: string;
        location: string;
    }

const ObservationCard: React.FC<ObservationCardProps> = ({ title , description, picture, location }) => {

    const [expanded, setExpanded] = useState(false)


    const handleExpand = () => {
        setExpanded(!expanded)
    }

    return (

            <View style={styles.paper}>
                <View style={styles.header}>
                <Text style={styles.text}>{title}</Text>
                <FAB  onPress={handleExpand} />
                </View>
                {expanded && (
                <View style={styles.paper}>
                <ListItem title="Description" caption={description} />
                <ListItem title="Picture" caption={picture} />
                <ListItem title="Location" caption={location} />
                </View>
                )}
                
        </View>
    )
}

export default ObservationCard

