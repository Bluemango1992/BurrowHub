import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react'
import styles from '@/styles/style';

const notes = [
  { id: '1', title: 'Meeting Notes', summary: 'Discussed project timelines and next steps.' },
  { id: '2', title: 'Ideas', summary: 'Brainstormed features for the new app version.' },
  // Add more notes as needed
];

const InternalNotes = () => {

  type Note = {
    id: string;
    title: string;
    summary: string;
  };
  
  const renderNoteItem = ({ item }: { item: Note }) => (
    <View style={styles.projectCard}>
      <Text style={[styles.text, styles.listitemTitle]}>{item.title}</Text>
      <Text style={styles.listitemCaption}>{item.summary}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.text, styles.headerText]}>Internal Notes</Text>
      </View>
      <FlatList
        data={notes}
        renderItem={renderNoteItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contents}
      />
      <View style={styles.footer}>
        {/* Footer Content Here, e.g., a button to add a new note */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Note</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InternalNotes