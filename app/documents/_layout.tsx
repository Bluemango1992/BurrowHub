import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// Sample data for document items
const documentsPlaceholder = Array(5).fill({}).map((_, index) => ({
  id: `placeholder-${index}`,
  title: '',
  description: '',
}));

const DocumentsPage = () => {
  const [documents, setDocuments] = useState(documentsPlaceholder);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching documents from a database
    setTimeout(() => {
      const fetchedDocuments = [
        { id: '1', title: 'Project Proposal', description: 'Description of the project proposal document.' },
        { id: '2', title: 'Budget Breakdown', description: 'Detailed budget breakdown for the project.' },
        // Add more documents as fetched from the backend
      ];
      setDocuments(fetchedDocuments);
      setLoading(false);
    }, 2000); // Simulate network request delay
  }, []);

  type Document = {
    id: string;
    title: string;
    description: string;
  };

  const renderDocumentItem = ({ item }: { item: Document }) => (
    <View style={[styles.documentCard, loading && styles.skeletonLoader]}>
      {!loading && (
        <>
          <Text style={styles.documentTitle}>{item.title}</Text>
          <Text style={styles.documentDescription}>{item.description}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );

  return (
    <FlatList
      data={documents}
      renderItem={renderDocumentItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  documentCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  skeletonLoader: {
    backgroundColor: '#e0e0e0',
  },
  documentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  documentDescription: {
    fontSize: 14,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default DocumentsPage;
