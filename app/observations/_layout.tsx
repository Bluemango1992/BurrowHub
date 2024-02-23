import { SafeAreaView, View, Text } from 'react-native'
import React from 'react'
import ObservationCard from '../../components/ObservationCard'
import styles from '../../styles/style'

const Observations = () => {

    const titledate = [
        {
            title: 'General',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'back door'
        },
        {
            title: 'Exsisting Conditions',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'This is a location'
        },
        {
            title: 'Concrete',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'This is a location'
        },
        {
            title: 'Masonry',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'This is a location'
        },
        {
            title: 'Metals',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'This is a location'
        },
        {
            title: 'Wood and Plastics',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'This is a location'
        },
        {
            title: 'Thermal and Moisture Protection',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'This is a location'
        },
        {
            title: 'Doors and Windows',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'This is a location'
        },
        {
            title: 'Finishes',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'This is a location'
        },
        {
            title: 'Specialties',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'This is a location'
        },
        {
            title: 'Equipment',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'This is a location'
        },
        {
            title: 'Furnishings',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'This is a location'
        },
        {
            title: 'Special Construction',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'This is a location'
        },
        {
            title: 'Conveying Equipment',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'This is a location'
        },
        {
            title: 'Fire Suppression',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'This is a location'
        },
        {
            title: 'Plumbing',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'This is a location'
        },
        {
            title: 'HVAC',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'This is a location'
        },
        {
            title: 'Electrical',
            description : 'This is a description',
            picture : 'This is a picture',
            location : 'This is a location'
        }
    
    ]

  return (
    <SafeAreaView>
        <View style={styles.contents}>
            {titledate.map((item, index) => (
                <ObservationCard key={index} title={item.title} description={item.description} picture={item.picture} location={item.location} />
            ))}
        </View>
    </SafeAreaView>
  )
}

export default Observations