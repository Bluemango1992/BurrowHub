import { SafeAreaView, View, Text } from 'react-native'
import React from 'react'
import ObservationCard from '../../components/ObservationCard'

const Observations = () => {
  return (
    <SafeAreaView>
      <Text>Observations</Text>
        <ObservationCard />
    </SafeAreaView>
  )
}

export default Observations