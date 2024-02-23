import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../../styles/style';

// Sample data for contacts
const contacts = [
  { id: '1', name: 'John Doe', email: 'john@example.com', message: 'Hello, can we meet tomorrow?' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', message: 'I am interested in your project' },
];



const ContactPage = () => {

  type Contact = {
    id: string;
    name: string;
    email: string;
    message: string;
  };

  const renderContactItem = ({ item }: { item: Contact }) => (
    <View style={styles.projectCard}>
      <Text style={[styles.text, styles.listitemTitle]}>{item.name}</Text>
      <Text style={styles.text}>{item.email}</Text>
      <Text style={styles.listitemCaption}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.text, styles.headerText]}>Contacts</Text>
      </View>
      <FlatList
        data={contacts}
        renderItem={renderContactItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contents}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactPage;
