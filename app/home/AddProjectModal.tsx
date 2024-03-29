import React from 'react';
import { View, TextInput, StyleSheet, Modal } from 'react-native';
import Button from '../../components/Button';
import styles from '../../styles/style';

interface AddProjectModalProps {
    isVisible: boolean;
    onAdd: (projectName: string) => void;
    onCancel: () => void;
}

const AddProjectModal: React.FC<AddProjectModalProps> = ({ isVisible, onAdd, onCancel }) => {
    const [projectName, setProjectName] = React.useState('');

    const handleAdd = () => {
        onAdd(projectName);
        setProjectName(''); // Clear the input after adding
        onCancel(); // Close the modal after adding
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onCancel}
        >
            <View style={styles.modalView}>
                <TextInput
                    placeholder="Project Name"
                    style={styles.input}
                    value={projectName}
                    onChangeText={setProjectName}
                />
                <View style={styles.footer}>
                <Button title="Add Project" onPress={handleAdd} />
                <Button title="Cancel" onPress={onCancel} primary={false} />
                </View> 
            </View>
        </Modal>
    );
};


export default AddProjectModal;
