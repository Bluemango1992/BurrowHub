import React from 'react';
import { View, TextInput, StyleSheet, Modal } from 'react-native';
import Button from '../../components/Button';

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
    
                <Button title="Add Project" onPress={handleAdd} />
                <Button title="Cancel" onPress={onCancel} primary={false} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        marginTop: '50%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        width: '100%',
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});

export default AddProjectModal;
