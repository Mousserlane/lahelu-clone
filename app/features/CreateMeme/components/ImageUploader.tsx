import type { FC } from 'react'
import { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { ThemedText, ThemedView } from '@/components'
import { Feather } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { useImagePicker } from '@/hooks/useImagePicker';

interface IImageUploaderProps {
  onUploadSuccess: (fileURL: string) => void
}

export const ImageUploader: FC<IImageUploaderProps> = ({ onUploadSuccess }) => {

  const { getImageFromPicker, error } = useImagePicker()
  const [previewImage, setPreviewImage] = useState<string>();

  const openDirectory = async () => {
    const res = await getImageFromPicker();
    if (error) {
      throw new Error(error)
    }
    setPreviewImage(res?.filePath)
    onUploadSuccess(res?.filePath!)
  }

  const renderPlaceholder = () => (
    <View style={styles.uploaderButton} >
      <Feather name="upload-cloud" size={32} />
    </View>
  )

  const renderImage = () => (
    <Image source={{ uri: previewImage }} style={styles.previewImage} contentFit='contain' />
  )

  return (
    <View style={{ marginBottom: 16 }}>
      <ThemedText style={{ marginBottom: 8 }} type="defaultSemiBold">
        Gambar / Video
      </ThemedText>
      <ThemedView style={styles.imageContainer}>
        <TouchableOpacity onPress={openDirectory} style={{ flex: 1 }}>
          {previewImage ? renderImage() : renderPlaceholder()}
        </TouchableOpacity>
      </ThemedView>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    borderWidth: 3,
    borderColor: '#F1F1F1',
    borderStyle: "dotted",
    minHeight: 240,
    padding: 8,
  },
  uploaderButton: {
    backgroundColor: '#F1F1F1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  previewImage: {
    width: '100%',
    height: 230,
  }
})