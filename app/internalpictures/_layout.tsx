import React from 'react';
import { View, Image, FlatList, Dimensions } from 'react-native';
import styles from '@/styles/style';

// Sample data for gallery images
const images = [
  { id: '1', uri: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg' },
  { id: '2', uri: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg' },
  // Add more images as needed
];

const numColumns = 2;
const WIDTH = Dimensions.get('window').width;

const ImageGalleryPage = () => {

  type Image = {
    id: string;
    uri: string;
  };

  const renderItem = ({ item }: { item: Image }) => (
    <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
      <Image
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: WIDTH / numColumns, // Equal width and height
          width: '100%',
        }}
        source={{ uri: item.uri }}
      />
    </View>
  );

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={numColumns}
      contentContainerStyle={styles.contents}
    />
  );
};

export default ImageGalleryPage;
