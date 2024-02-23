import { View, Text, Modal } from 'react-native'
import React from 'react'
import styles from '@/styles/style';
import Button from '@/components/Button';
import { useState } from 'react';

const FieldReport = () => {


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

      

      const fieldreports = projectData?.FieldReports || [];

      if (fieldreports.length === 0) {
        return (
          <InsertFieldReport />
        );
      }

      return (
        <View style={styles.container}>
          {fieldreports.map((fieldreport) => (
            <View style={styles.paper}>
              <View key={fieldreport.reportId} style={styles.contents}>
                <Text key={fieldreport.reportId}>{fieldreport.reportName}</Text>
                <Text>{fieldreport.reportId}</Text>
                <Text>{fieldreport.projectDetails.projectId}</Text>
                <Text>{fieldreport.projectDetails.projectName}</Text>
              </View>
            </View>
          ))}
        </View>
      );
}


export default FieldReport

const InsertFieldReport = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <View style={styles.container}>
      <Text>No field reports available.</Text>
      <Button title="Create Field Report" onPress={openModal} />
      {isModalOpen && <Modal visible={true} animationType="slide" />}
    </View>
  );
};
