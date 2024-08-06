import { useState } from 'react';
import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system'

type ImageMeta = {
  fileName?: string;
  fileType?: string; // TODO : Should be media type
  filePath?: string
}

// type PickerResult = {
//   imageMeta: ImageMeta;
// };
export const useImagePicker = () => {
  const [error, setError] = useState();

  const getFileURI = (filePath: string): string => {
    return Platform.OS === 'ios' ? filePath.replace('file:', '')! : filePath!;
  };

  const getMetaData = (imageData: ImagePicker.ImagePickerAsset): ImageMeta => ({
    fileName: imageData.fileName!,
    fileType: imageData.mimeType?.replace('image/', ''),
    filePath: getFileURI(imageData.uri!),
  });

  const getImageFromPicker = async (): Promise<ImageMeta | undefined> => {
    try {
      const image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
      });

      const imageData = image?.assets?.[0]!;

      const imageMeta = getMetaData(imageData);

      // const blob = await
      // const blob = await .fs.readFile(imageMeta.filePath!, 'base64');

      return { ...imageMeta };
    } catch (err: any) {
      // TODO : Need proper error handling
      console.error('Image Picker or Blob Error: ', err);
      setError(err);
    }
  };

  return { getImageFromPicker, error };
};
