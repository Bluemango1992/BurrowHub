// Import the AddProjectModal component at the top
import AddProjectModal from './AddProjectModal'; // Adjust the import path as necessary
import { SafeAreaView, View, Text, Button, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const mockProjects = [
    {
        id: '1',
        title: 'Project 1',
        details: [
            {
                id: '1',
                title: 'Task 1',
                description: 'This is the first task',
            },
            {
                id: '2',
                title: 'Task 2',
                description: 'This is the second task',
            },
        ],
    },
    {
        id: '2',
        title: 'Project 2',
        details: [
            {
                id: '1',
                title: 'Task 1',
                description: 'This is the first task',
            },
            {
                id: '2',
                title: 'Task 2',
                description: 'This is the second task',
            },
        ],
    },
    {
        id: '3',
        title: 'Project 3',
        details: [
            {
                id: '1',
                title: 'Task 1',
                description: 'This is the first task',
            },
            {
                id: '2',
                title: 'Task 2',
                description: 'This is the second task',
            },
        ],
    },
];

const HomeScreen: React.FC = () => {

    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [projects, setProjects] = useState(mockProjects);
    const [isModalVisible, setModalVisible] = useState(false);

    const handleLogout = () => {
        console.log('Logout attempt');
        router.navigate('login');
    };

    const addNewProject = (projectName: string) => {
        const newProject = {
            id: Date.now().toString(),
            title: projectName,
            details: [], // Assuming an empty details array for a new project
        };
        setProjects(currentProjects => [...currentProjects, newProject]);
    };
    

    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleProjectPress = () => {
        router.navigate('projects');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Welcome to the Home Screen!</Text>
                    <Button title="Logout" onPress={handleLogout} />
                </View>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <FlatList
                    data={filteredProjects}
                    renderItem={({ item }) => (
                        // Inside your FlatList's renderItem in HomeScreen
                    <TouchableOpacity style={styles.container} onPress={handleProjectPress}>
                    <Text>{item.title}</Text>
                    </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    ListFooterComponent={() => (
                        <Button title="Add New Project" onPress={() => setModalVisible(true)} />
                    )}
                />
                <AddProjectModal
                    isVisible={isModalVisible}
                    onAdd={addNewProject}
                    onCancel={() => setModalVisible(false)}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
    },
    searchBar: {
        marginBottom: 20,
        paddingHorizontal: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
    },
    card: {
        padding: 20,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    input: {
        width: '100%',
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    noDataContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noDataText: {
        fontSize: 16,
    },

});

export default HomeScreen;
