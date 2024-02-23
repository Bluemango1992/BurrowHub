import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Button from '@/components/Button'
import styles from '../../styles/style'
import { useRouter } from 'expo-router'

const ProjectScreen = () => {

  const handlePress = () => {
    console.log('Pressed')
  }


  return (
    <SafeAreaView>
        <View style={styles.contents}>
      <Text style={styles.text}>Project 1</Text>
      <View style={styles.seperator} />
      <Text style={styles.text}> 90 John St, New York, NY 10038</Text>
      <Button title="Open Maps" onPress={handlePress} />
      </View>
      <ScrollView>
      <ProjectElements />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProjectScreen




const ProjectElements = () => {

  const router = useRouter()

  const projectData = {
    FieldReports: [
      {
        reportId: "report1",
        reportName: "High Level Group 1",
        projectDetails: {
          projectId: "project1",
          projectName: "Project Name Here"
        }
      }
    ],
    Observations: [
      {
        observationId: "obs1",
        description: "Observation description here",
        buildingPart: "Part of the building being observed"
      }
    ],
    Collaborations: [
      {
        observationId: "otherObs1",
        description: "Description of observation by another surveyor",
        surveyorId: "surveyorId1",
        surveyorName: "Surveyor Name"
      }
    ],
    Contacts: [
      {
        surveyorId: "surveyorId2",
        surveyorName: "Responsible Surveyor Name",
        contactDetails: {
          email: "email@example.com",
          phone: "000-000-0000"
        }
      }
    ],
    InternalNotes: [
      {
        noteId: "note1",
        content: "Internal note content here"
      }
    ],
    InternalPictures: [
      {
        pictureId: "pic1",
        description: "Picture description here",
        filePath: "path/to/picture.jpg"
      }
    ],
    Documents: [
      {
        documentId: "doc1",
        documentName: "Document Name",
        documentType: "PDF",
        filePath: "path/to/document.pdf"
      }
    ]
  };

  const arrayNames = Object.keys(projectData)

  
  const handlePress = (pageName: string) => {
    router.navigate(pageName.toLowerCase())
  }

  return (
    <>
      {arrayNames.map((arrayName) => {
        return (
          <TouchableOpacity key={arrayName} style={styles.paper} onPress={() => handlePress(arrayName)}>
            <Text style={styles.text}>{arrayName}</Text>
          </TouchableOpacity>
        )
      })}
    </>
  )
}
