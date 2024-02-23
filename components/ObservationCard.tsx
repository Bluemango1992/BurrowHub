import React from 'react'
import { View, Text } from 'react-native'
import styles from '@/styles/style'

const ObservationCard = () => {

    const observation = {
        description: 'This is a description',
        buildingPart: 'This is a building part'
    }

    return (
        <>
            <View style={styles.paper}>
                <Text>Observation</Text>
                <Text>{observation.description}</Text>
                <Text>{observation.buildingPart}</Text>
            </View>
        </>
    )
    }

export default ObservationCard

